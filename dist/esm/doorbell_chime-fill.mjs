export const name="doorbell_chime-fill";
export const id="dl_aa643e46ff344be4a236";
export const url=new URL("../icons/doorbell_chime-fill.svg?v=4b9b80585bbdb8e21f4ee63776f84f950cf5fd4d2278f3ea048fcbe6e9f1217a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
