import { UI, icons, STATE, notify, themes } from "../src/lib";

declare module "react-chain" {
    export { UI };
    export { notify };
    export { STATE };
    export { icons };
    export { themes };
}