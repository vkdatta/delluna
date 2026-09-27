export const name="counter_7-fill";
export const id="dl_ae6b14a008566213db7c";
export const url=new URL("../icons/counter_7-fill.svg?v=67f4686b060840add66924b41a3e4540361927a9580e6144ce6cb695e21f339e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
