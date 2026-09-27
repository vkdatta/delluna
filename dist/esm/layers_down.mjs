export const name="layers_down";
export const id="dl_2088684354c90288b99a";
export const url=new URL("../icons/layers_down.svg?v=6741cc2029c1115e7aac35bff6d17dfb5a28ef36daf7c9d891769d841483e3a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
