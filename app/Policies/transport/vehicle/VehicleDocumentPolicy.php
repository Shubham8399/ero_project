<?php

namespace App\Policies\Transport\Vehicle;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class VehicleDocumentPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Determine whether the user can fetch vehicle document pre requisite
     *
     * @param  \App\User  $user
     * @param  \App\Models\Transport\Vehicle\VehicleDocument  $vehicle_document
     * @return mixed
     */
    public function preRequisite(User $user)
    {
        return $user->can('create-vehicle-document') || $user->can('edit-vehicle-document');
    }

    /**
     * Determine whether the user can list all the vehicle document.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Transport\Vehicle\VehicleDocument  $vehicle_document
     * @return mixed
     */
    public function list(User $user)
    {
        return $user->can('list-vehicle-document');
    }

    /**
     * Determine whether the user can create vehicle document.
     *
     * @param  \App\User  $user
     * @return mixed
     */
    public function create(User $user)
    {
        return $user->can('create-vehicle-document');
    }

    /**
     * Determine whether the user can view the vehicle document.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Transport\Vehicle\VehicleDocument  $vehicle_document
     * @return mixed
     */
    public function show(User $user)
    {
        return $user->can('list-vehicle-document');
    }

    /**
     * Determine whether the user can update the vehicle document.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Transport\Vehicle\VehicleDocument  $vehicle_document
     * @return mixed
     */
    public function update(User $user)
    {
        return $user->can('edit-vehicle-document');
    }

    /**
     * Determine whether the user can delete the vehicle document.
     *
     * @param  \App\User  $user
     * @param  \App\Models\Transport\Vehicle\VehicleDocument  $vehicle_document
     * @return mixed
     */
    public function delete(User $user)
    {
        return $user->can('delete-vehicle-document');
    }
}
