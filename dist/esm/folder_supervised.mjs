export const name="folder_supervised";
export const id="dl_08c48c6c5369ee287ed4";
export const url=new URL("../icons/folder_supervised.svg?v=301b1ad1d913b2153f81992dae164c785cfffd96156b06bd3c59482387375898",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
