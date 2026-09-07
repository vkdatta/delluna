export const name="toilet";
export const id="dl_1d6562ec993342d8b5fe";
export const url=new URL("../icons/toilet.svg?v=c8ba5e782b1a39ed2a61038c46c66c544963fe9ca77c6fa55e158fbd17945eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
