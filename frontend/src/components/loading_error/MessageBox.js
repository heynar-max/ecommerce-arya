


export const MessageBox = (props) => {
    return (
        <div class="alert alert-danger" varient={props.variant || 'info'} role="alert">
{props.children}
</div>
    )
    }