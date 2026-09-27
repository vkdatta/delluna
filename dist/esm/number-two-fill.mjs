export const name="number-two-fill";
export const id="dl_1954c652b93349cab6d0";
export const url=new URL("../icons/number-two-fill.svg?v=adec5080dda6d74ce7fadcdf0c7451aece3a49c90e9ab6479431bd1eed4f0222",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
