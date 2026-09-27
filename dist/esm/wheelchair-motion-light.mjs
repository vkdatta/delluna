export const name="wheelchair-motion-light";
export const id="dl_0e358e5e36c7cfa5c25f";
export const url=new URL("../icons/wheelchair-motion-light.svg?v=de54e84d9b02536d9391e1d236aae6e56d1f7e383fd848d37fc35d0417ee3b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
