export const name="columns-plus-right-thin";
export const id="dl_08d34328202647f4b8d0";
export const url=new URL("../icons/columns-plus-right-thin.svg?v=f9f589d73ed1c990674ce84bd9212c6d8e630737454275b5a765ab04bffc4595",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
