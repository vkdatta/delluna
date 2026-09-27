export const name="edit_road";
export const id="dl_aaebc8784ec4f9e9244f";
export const url=new URL("../icons/edit_road.svg?v=f8c720676489b362975a9df3182e13224b81d497fcc5ec4621189b383cc7d776",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
