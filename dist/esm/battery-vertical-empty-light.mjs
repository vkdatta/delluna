export const name="battery-vertical-empty-light";
export const id="dl_b23a8609db1543869382";
export const url=new URL("../icons/battery-vertical-empty-light.svg?v=21c8bf1f9d40c9c6e21a7361332510a2807f05bfee8367685e84bd864784acfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
