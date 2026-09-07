export const name="arrow-square-down-duotone";
export const id="dl_de2e7431d4914dd29158";
export const url=new URL("../icons/arrow-square-down-duotone.svg?v=2ec3631f1f27ec1c55fdaaa3f5c4f6b4e58184f58b1bf9fb749ce94ab0e7bfec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
