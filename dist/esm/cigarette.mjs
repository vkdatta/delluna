export const name="cigarette";
export const id="dl_4384adabc1cd46ec9e9d";
export const url=new URL("../icons/cigarette.svg?v=769c0ccd65cbefae8636f6908f01a66a7f11dcc48ff24e9a06565e48a2d96010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
