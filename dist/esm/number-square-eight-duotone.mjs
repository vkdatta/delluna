export const name="number-square-eight-duotone";
export const id="dl_3e8625e664f94b58b45e";
export const url=new URL("../icons/number-square-eight-duotone.svg?v=65704e9e67894c2e95521322f8924a884886949a015c07b23ac68bead2fd3340",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
