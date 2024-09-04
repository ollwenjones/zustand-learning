import classNames from 'classnames';
import { useRef } from 'react';


export function useRenderFlashClass(className?: string) {
    const classNameRef = useRef('animate--off');
    classNameRef.current = classNameRef.current === 'animate--on' ? 'animate--off' : 'animate--on';
    return classNames(className, classNameRef.current);
}