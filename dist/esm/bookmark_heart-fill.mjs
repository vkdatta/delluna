export const name="bookmark_heart-fill";
export const id="dl_d3caf6440babec46f248";
export const url=new URL("../icons/bookmark_heart-fill.svg?v=81f72b96d3956a200b55b9059b918af19dcd4a352ed4dd60d3b282caf4a389c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
