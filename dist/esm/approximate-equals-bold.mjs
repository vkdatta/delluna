export const name="approximate-equals-bold";
export const id="dl_37f23742a0274826a9c9";
export const url=new URL("../icons/approximate-equals-bold.svg?v=dde3938f3fe25e0cf5483f780487a2cf5d2741fa35ee41b4e6c7e3209a06695f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
