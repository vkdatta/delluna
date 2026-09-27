export const name="folder-user-fill";
export const id="dl_eb0b5c44003c4c0a81cd";
export const url=new URL("../icons/folder-user-fill.svg?v=a857cee21a93bc3303d74afd7163caf210a2c973f722b4046c43e1164299991f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
