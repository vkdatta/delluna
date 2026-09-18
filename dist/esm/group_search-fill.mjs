export const name="group_search-fill";
export const id="dl_c2742fbc5fdd45afbecf";
export const url=new URL("../icons/G/group_search-fill.svg?v=fa238baddf71bc7626af3e410195f2a520ecbf93a4b2f2a9c5adf4496490403c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
