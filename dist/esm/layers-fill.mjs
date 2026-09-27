export const name="layers-fill";
export const id="dl_e59385e18323649f123c";
export const url=new URL("../icons/layers-fill.svg?v=5a112d5fd9cc9ecb8a18414ff33bd00c9ee61c95db6e23324bf1c5ae8f88ffe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
