export const name="eyedropper-sample-duotone";
export const id="dl_de31d2ae710f47aa95a6";
export const url=new URL("../icons/eyedropper-sample-duotone.svg?v=9fbb02690dd4e1499632a24154fe234c58b35123a37d1a681d73fa24c2fd9c35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
