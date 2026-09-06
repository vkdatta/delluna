export const name="folder-simple-bold";
export const id="dl_7ed267c32d83496d8c01";
export const url=new URL("../icons/folder-simple-bold.svg?v=afaabcb4adf34642f0208c8d6c38aa9e214c7dbc31988d2ee1eab48298f04396",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
