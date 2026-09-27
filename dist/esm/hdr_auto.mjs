export const name="hdr_auto";
export const id="dl_3321433ecca281a03e67";
export const url=new URL("../icons/hdr_auto.svg?v=c5c9e9b9c699016b187b562efeb9fed7b72b53414f7896e555f4e131173641f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
