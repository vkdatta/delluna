export const name="watch-fill";
export const id="dl_c7af359dcdec4d93a14b";
export const url=new URL("../icons/W/watch-fill.svg?v=c0d1400b8f8fb297ae55bd1f04ac19e6b3e5e11b37df1a15b348cd5d6befd24d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
