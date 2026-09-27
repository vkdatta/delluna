export const name="more_vert-fill";
export const id="dl_11d4402293461f6a81d4";
export const url=new URL("../icons/more_vert-fill.svg?v=a4511cb5c4b24eb78541c730b838b1261802e00fed8760b63f3cd4c146635a00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
