export const name="arrow_left";
export const id="dl_ea2fbd041e1536844ac4";
export const url=new URL("../icons/arrow_left.svg?v=3ba7e8e3f601f134f5a440236b7ba686aaa90c92185657dc1699b72a6eefd10e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
