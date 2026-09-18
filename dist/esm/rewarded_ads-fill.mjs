export const name="rewarded_ads-fill";
export const id="dl_0d835ec0bb5249f1bf44";
export const url=new URL("../icons/R/rewarded_ads-fill.svg?v=85ad063083df5c3ddf499e2202694119b801bd626bb47bc527a81c4e22c67722",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
