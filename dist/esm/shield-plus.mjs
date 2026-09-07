export const name="shield-plus";
export const id="dl_806366d36c2840e28cb7";
export const url=new URL("../icons/S/shield-plus.svg?v=34b3f81ff1fa15db76303af4ebfd19cdc8cfc60eaec96f7ec6afadb5dcd6dd7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
