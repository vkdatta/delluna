export const name="lucid_3-scooter";
export const id="dl_9d362a84219f401fab13";
export const url=new URL("../icons/lucid_3-scooter.svg?v=e10de17849e3f8aaa5cc14f61c2607148b8372beabe25e70a4b520184d98e99c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
