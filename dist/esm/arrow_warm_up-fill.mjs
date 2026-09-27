export const name="arrow_warm_up-fill";
export const id="dl_6d069df43d06ea7b1f48";
export const url=new URL("../icons/arrow_warm_up-fill.svg?v=0db78a005db852d5e35fe7c68c6c740ff311c2409c8fb0f00d2e3bcfc97d00a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
