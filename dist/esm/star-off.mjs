export const name="star-off";
export const id="dl_eb53fbd9c0d1450385d8";
export const url=new URL("../icons/star-off.svg?v=d5d76358396a45282477bfaa257ef17a5f9b62fd8f2c25ab264118d35f736e26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
