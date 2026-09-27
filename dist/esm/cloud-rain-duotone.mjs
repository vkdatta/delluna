export const name="cloud-rain-duotone";
export const id="dl_79b2e9a54171487bbe4a";
export const url=new URL("../icons/cloud-rain-duotone.svg?v=d9ecbd12df6981f3eaa886d011fafa7389c9d11ed6db3e674fee57f7cc893d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
