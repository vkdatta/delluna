export const name="gender-female-duotone";
export const id="dl_5372a9de0cbe4c1aba0a";
export const url=new URL("../icons/gender-female-duotone.svg?v=8c05cb715b1267189dd8ea9ee5486d97bb369ef17bbde14fa0e2a2c368051d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
