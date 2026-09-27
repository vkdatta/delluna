export const name="lucid_1-cannabis-off";
export const id="dl_25219aace4ee45ac8e0e";
export const url=new URL("../icons/lucid_1-cannabis-off.svg?v=5cc5e4a13d5130f36b26ebd9f6c1613aa9c150510a55c6582611b9fa4fe5e7c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
