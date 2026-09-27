export const name="lucid_1-circle-pile";
export const id="dl_1bbe95d436f14429aa50";
export const url=new URL("../icons/lucid_1-circle-pile.svg?v=f3cf24447f303b86438720d29a084714ed523093380fbeebaf20a751269e15b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
