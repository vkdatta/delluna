export const name="extension_off";
export const id="dl_bd03c22cf2bddfddfc0e";
export const url=new URL("../icons/extension_off.svg?v=15907fdeb5604243208f0ba3b1fa6b4acfaa578aea59939e2a25e6429db9ae07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
