export const name="peace-duotone";
export const id="dl_420a4261a58a4571a890";
export const url=new URL("../icons/peace-duotone.svg?v=88b7a8465da22c2016691e9efebb2a28e614d43e90f15d97ad887cc526dd979a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
