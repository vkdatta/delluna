export const name="propane-fill";
export const id="dl_20fbeb876b230ee4ea50";
export const url=new URL("../icons/propane-fill.svg?v=763f39c1bdbb79a3b7eda6b4a9bf6199b30b4a5754d022bac82e75086bd36a91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
