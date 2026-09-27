export const name="file_map_stack";
export const id="dl_4a95bd1efc371a7cbe81";
export const url=new URL("../icons/file_map_stack.svg?v=a512b9480fcd15d74f5b8a5f55884b8b8eb2bf26f9d8987257a9f0cf5adaebf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
