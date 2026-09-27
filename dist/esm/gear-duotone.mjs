export const name="gear-duotone";
export const id="dl_c756f081e6324669b219";
export const url=new URL("../icons/gear-duotone.svg?v=9d1fa3784634dea469587e48286f08e897abe003e79877a9a6c9791cb0a36d8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
