export const name="lucid_3-rotate-ccw-square";
export const id="dl_f709b3327c2749fc82e8";
export const url=new URL("../icons/lucid_3-rotate-ccw-square.svg?v=4b6aa9fad8e50e008342c9b669e85fd17427d0fe917b1795ca558a50a4a33249",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
