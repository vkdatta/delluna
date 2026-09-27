export const name="hair-dryer-duotone";
export const id="dl_2ef98bf6266d4202982e";
export const url=new URL("../icons/hair-dryer-duotone.svg?v=d57f33205767543bf9fa5e7fbcc6b9c6cd1507c54026ebfbd8e46f7bb9050692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
