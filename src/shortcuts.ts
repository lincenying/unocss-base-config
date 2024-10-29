import type { UserShortcuts } from 'unocss'

const shortcuts: UserShortcuts<object> = [
    [
        'btn',
        'px-8px py-1px rounded inline-block bg-hex-3aced5ff text-white text-13px '
        + 'cursor-pointer !outline-none hover:bg-hex-3aced5ee '
        + 'disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],

    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-hex-3aced5dd'],

    ['flex--c', 'flex justify-start items-center'],
    ['flex-c-', 'flex justify-center items-stretch'],
    ['flex-cc', 'flex justify-center items-center'],
    ['flex-bc', 'flex justify-between items-center'],
    ['flex-ac', 'flex justify-around items-center'],

    ['canvas', 'absolute top-0 left-0 w-full h-full'],

    ['line-1', 'text-truncate'],
    ['line-2', 'text-truncate line-clamp-2'],
    ['line-3', 'text-truncate line-clamp-3'],
    ['line-4', 'text-truncate line-clamp-4'],

    ['text-xs', 'text-12px lh-16px'],
    ['text-sm', 'text-14px lh-20px'],
    ['text-base', 'text-16px lh-24px'],
    ['text-lg', 'text-18px lh-28px'],
    ['text-xl', 'text-20px lh-28px'],
    ['text-2xl', 'text-24px lh-32px'],
    ['text-3xl', 'text-30px lh-36px'],
    ['text-4xl', 'text-36px lh-40px'],
]

export default shortcuts
