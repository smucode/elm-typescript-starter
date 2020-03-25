port module Ports exposing (toJs, toJs2, fromJs, subscribe)


port toJs : String -> Cmd msg

port toJs2 : String -> Cmd msg

port fromJs : (String -> msg) -> Sub msg


subscribe subs =
    Sub.batch
        [ fromJs subs.fromJs
        ]
