export const name="mobile_landscape-fill";
export const id="dl_fed24db1bab446dfbfb7";
export const url=new URL("../icons/mobile_landscape-fill.svg?v=6a6fc91e970c414f5f7f18e9e77968dc5b1b712b7a3b6d0039f51f761dd66612",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
