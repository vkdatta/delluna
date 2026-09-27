export const name="apartment-fill";
export const id="dl_ba152e43e1838071b20d";
export const url=new URL("../icons/apartment-fill.svg?v=8240cd1db6a11c3867d6d51a3d4c6f017223ad460099343e0dae3f16f05864eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
