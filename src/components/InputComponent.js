import React from 'react';

export class InputComponent extends React.Component {

    render() {
        return (
            <div class="input-group mb-3">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="type your Number" />
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Reset</button>
                    </div>
                    <div class="error-message">
                        Value that you entered is not a number!
                    </div>
                </div>
            </div>
        );
    }
}


