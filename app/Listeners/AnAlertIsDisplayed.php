<?php

namespace App\Listeners;

use App\Events\DisplayAlert;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AnAlertIsDisplayed
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  DisplayAlert  $event
     * @return void
     */
    public function handle(DisplayAlert $event)
    {
        //
    }
}
