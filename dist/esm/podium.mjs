export const name="podium";
export const id="dl_7e0e27309db62b1b98ae";
export const url=new URL("../icons/podium.svg?v=06d621a11d8e3cd0ecee1be1218bea187a4d8b559c615cdc14df97468b2e7f11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
