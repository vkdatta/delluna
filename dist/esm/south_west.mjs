export const name="south_west";
export const id="dl_fb651845283c334ce0de";
export const url=new URL("../icons/south_west.svg?v=de923947851b5f5f7e5c41629eb87fcadb625c2447c5d32b21780ce99bbcc63e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
