export const name="github-logo-duotone";
export const id="dl_afde04b2b0b14a19a1d6";
export const url=new URL("../icons/github-logo-duotone.svg?v=143cba64c038bcc933e20b569a46198a06299cc715ea83b46b4f32aef535d603",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
