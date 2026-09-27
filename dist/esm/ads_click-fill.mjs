export const name="ads_click-fill";
export const id="dl_f7ec3e2510668facc081";
export const url=new URL("../icons/ads_click-fill.svg?v=06b3c060c416015e217c8a3f7438e01bbf648b7588416b3666fd322775fa6fad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
