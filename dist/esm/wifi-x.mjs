export const name="wifi-x";
export const id="dl_dd1d466af312429a0987";
export const url=new URL("../icons/wifi-x.svg?v=f16cbc4158d24f237f64c97bde013e8cfb65c98c0374954d6545ac31f2b562f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
