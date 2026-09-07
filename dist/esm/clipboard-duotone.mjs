export const name="clipboard-duotone";
export const id="dl_2dd92037fa2043a8832b";
export const url=new URL("../icons/clipboard-duotone.svg?v=74209f3f2dd9664aae3dd29263f7b600850952406773dcec8923055309ab9e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
