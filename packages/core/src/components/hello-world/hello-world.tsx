import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'hello-world'
})

export class HelloWorld {
    @Prop() message: string = 'Hello World';

    render() {
        return (
            <p>{this.message}</p>
        )
    }
}