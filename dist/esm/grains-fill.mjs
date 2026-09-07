export const name="grains-fill";
export const id="dl_d991aeb7f5264225a147";
export const url=new URL("../icons/grains-fill.svg?v=da70f309bdcef600c259bae09a340f443f32950a40e02f7d18dcf1804e115cce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
