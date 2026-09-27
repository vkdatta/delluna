export const name="bread";
export const id="dl_c78bf1aa4bf34886a6f0";
export const url=new URL("../icons/bread.svg?v=9dce7a9a3985d48e659ab66c124389e5c4310b629c4c64f6b2688df0cfe9c0ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
