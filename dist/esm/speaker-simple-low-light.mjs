export const name="speaker-simple-low-light";
export const id="dl_560c8deda1404889a98c";
export const url=new URL("../icons/S/speaker-simple-low-light.svg?v=8f5fe760a5235afb229fa58b0ba9c71939e7153560d0fc1405fc0bd7f9a91c56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
