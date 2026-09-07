export const name="hockey-duotone";
export const id="dl_c57716e875c5469388ac";
export const url=new URL("../icons/hockey-duotone.svg?v=54d33fa65162e06343c97ebb7f6ef03d98faf371c3180a9637b9b953224e19cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
