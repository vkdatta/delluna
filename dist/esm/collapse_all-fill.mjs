export const name="collapse_all-fill";
export const id="dl_cec7cb9c472948cae258";
export const url=new URL("../icons/collapse_all-fill.svg?v=f508a1aed7b007c9ccf689b36ee60bff1a295b8723475dc28eb012aa475df507",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
