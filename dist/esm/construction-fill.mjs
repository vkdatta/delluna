export const name="construction-fill";
export const id="dl_c8a39c68fef746d51138";
export const url=new URL("../icons/construction-fill.svg?v=3e239e4c9282fd96f8bc4317639959e268d786dac1112baeb0210843e2aea701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
