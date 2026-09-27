export const name="lucid_1-bomb";
export const id="dl_4a7a1f22a0b945ac8f60";
export const url=new URL("../icons/lucid_1-bomb.svg?v=52e397dd766c0fb1fba847ff82d468116b48bc8cc5a881f471c2f1b0040a7a06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
