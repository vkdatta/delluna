export const name="raven-fill";
export const id="dl_5b3057cd89643cfc7b11";
export const url=new URL("../icons/raven-fill.svg?v=e1109eda633fc93a52a0ca32f9b88b55c6caac33330d982e67baba3c03d4ccd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
