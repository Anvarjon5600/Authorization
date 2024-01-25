import {useDispatch, useSelector} from "react-redux";
// enhances the type Safety for this
import type {TypedUseSelectorHook} from "react-redux";

import { AppDispatch, RootState } from "../store";

// custom hooks useAppDispatch & useAppSelector. 
export const useAppDispatch: () => AppDispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;