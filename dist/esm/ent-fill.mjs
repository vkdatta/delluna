export const name="ent-fill";
export const id="dl_5f4aa5868b8a54a49b65";
export const url=new URL("../icons/ent-fill.svg?v=e6b11df36fdc79ab0baaa477c8ee0c1e32e018ab44e34893d573e409cacf188d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
