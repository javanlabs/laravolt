<?php

namespace Laravolt\Suitable;

use Illuminate\Contracts\Support\Responsable;
use Laravolt\Suitable\Plugins\Html;

abstract class TableView implements Responsable
{
    protected $source = null;

    protected $plugins = [];

    /**
     * TableView constructor.
     */
    public function __construct($source)
    {
        $this->source = $source;
        $this->html = new Html();
    }

    public function toResponse($request)
    {
        $table = app('laravolt.suitable')->columns($this->columns());

        $this->html->decorate($table);
        collect($this->plugins)->each->decorate($table);

        foreach ($this->plugins as $plugin) {
            if ($plugin->shouldResponse()) {
                return $plugin->response($this->source, $table);
            }
        }

        return $this->html->response($this->source, $table);
    }

    public function view(string $view = '', array $data = [])
    {
        $this->html->view($view)->data($data);

        return $this;
    }

    public function alias($alias)
    {
        $this->html->alias($alias);

        return $this;
    }

    public function paginate($perPage)
    {
        $this->html->paginate($perPage);

        return $this;
    }

    public function plugins($plugins)
    {
        $this->plugins = is_array($plugins) ? $plugins : func_get_args();

        collect($this->plugins)->each->init();

        return $this;
    }

    abstract protected function columns();

    abstract protected function segments();
}
