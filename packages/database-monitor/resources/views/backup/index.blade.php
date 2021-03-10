<x-laravolt::layout.app :title="__('Backup & Restore')">
    <x-slot name="actions">
        @include('database-monitor::backup._restore-button')
        <x-laravolt::button form="form-backup">
            <i class="icon folder plus"></i> @lang('Backup Now')
        </x-laravolt::button>
    </x-slot>

    {!! form()->open()->route('database-monitor::backup.store')->id('form-backup') !!}
    {!! form()->close() !!}

    {!! app('laravolt.file-manager')->openDisk($disk)->render() !!}

</x-laravolt::layout.app>
