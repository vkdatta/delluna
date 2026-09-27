export const name="sell_cloud-fill";
export const id="dl_d049cd67c8a7c7a504dd";
export const url=new URL("../icons/sell_cloud-fill.svg?v=28607eb5034013ca4ca96a89f6205fa98b5d7b4f476f3344905bfea4575346bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
