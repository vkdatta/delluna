export const name="mobile_loupe-fill";
export const id="dl_ad8f47b255566bfb3c3c";
export const url=new URL("../icons/mobile_loupe-fill.svg?v=67728f70ca76835f69c11d52ef23f293f24177d899fdc33671393e39cb9f296b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
