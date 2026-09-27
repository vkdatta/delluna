export const name="hvac-fill";
export const id="dl_0b7f57a8c6903ee6f528";
export const url=new URL("../icons/hvac-fill.svg?v=c3535a2c5241a2941860c8e2150b1ce90078bf95403442999deb2eac238e88c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
