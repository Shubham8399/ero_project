<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *request
     * @return array
     */
    public function rules()
  {
        $rules = [
            'password' => 'required',
            'email_or_username'=>'required'
        ];

        return $rules;
    }

    /**
     * Translate fields with user friendly name.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'email_or_username'    => trans('email_or_username'),
            'password' => trans('password')
        ];
    }
//
//    /**
//     * Get the error messages for the defined validation rules.
//     *
//     * @return array
//     */
    public function messages()
    {
        return [
        ];
    }
}
