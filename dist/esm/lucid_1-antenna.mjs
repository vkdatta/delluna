export const name="lucid_1-antenna";
export const id="dl_8fad1ea3a28d43f4a605";
export const url=new URL("../icons/lucid_1-antenna.svg?v=0d61bad796c40b2dbb38bf52880649aa4870516c04c785c0db1353f2b4d0b8fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
