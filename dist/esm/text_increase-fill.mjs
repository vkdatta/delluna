export const name="text_increase-fill";
export const id="dl_ee988a651e788b2b7d38";
export const url=new URL("../icons/text_increase-fill.svg?v=48fb4b53faaf560143e6a59c5b1a3f3cae01c9870d7b4332966cb975a5baf408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
