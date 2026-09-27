export const name="dynamic_feed-fill";
export const id="dl_eb84436176804cd89ab7";
export const url=new URL("../icons/dynamic_feed-fill.svg?v=f5b0130ff6524b7a16a6ee2405ae3ed19eede2a631eff12dd9672bd240e57909",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
