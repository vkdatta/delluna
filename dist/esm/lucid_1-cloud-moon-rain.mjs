export const name="lucid_1-cloud-moon-rain";
export const id="dl_5d08286f5428450186aa";
export const url=new URL("../icons/lucid_1-cloud-moon-rain.svg?v=e76cab0fe764eb46b34b0cf0e9f8bb0fde69f73b7cc89a91ead0acd45df05426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
