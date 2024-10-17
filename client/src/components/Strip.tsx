//now that i think about it, i could've named this something more generic instead of just strip
function Strip({ isComment, children }: any) {
    return isComment ? (
        <div className="stripCol"> {children} </div>
    ) : (
        <div className="strip"> {children} </div>
    )
    // return (
    //     <div className="strip">
    //         {children}
    //     </div>
    // )
}

export default Strip;