export const name="arrow_split-fill";
export const id="dl_784e0ddf874841c4bf89";
export const url=new URL("../icons/A/arrow_split-fill.svg?v=3e58fe4d79f1732080c547b32f75f677eee6d4c257d0fb55013d98d378ef8a05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
