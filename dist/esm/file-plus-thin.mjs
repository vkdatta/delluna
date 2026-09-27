export const name="file-plus-thin";
export const id="dl_1e68888d813d409f9d14";
export const url=new URL("../icons/file-plus-thin.svg?v=fcc069d5dfd66f38a9f2d955ff3b04d6a4a85555f7b5209a646c23e11fad1a3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
