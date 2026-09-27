export const name="magnifying-glass-minus-light";
export const id="dl_af818734f9f64e128e38";
export const url=new URL("../icons/magnifying-glass-minus-light.svg?v=298ebc3a4b1375586053c1dc4382489d28ecec11a7671c60976a1369132ce281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
