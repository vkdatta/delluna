export const name="folder-simple-lock-bold";
export const id="dl_9b4a205da42a450e9f3c";
export const url=new URL("../icons/folder-simple-lock-bold.svg?v=aae5f112f2e8a6b30e4f539c3fa1662cd1cdc90f3bf8b0e44c3abbc923b4dc54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
