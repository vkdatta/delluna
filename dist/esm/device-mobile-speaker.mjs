export const name="device-mobile-speaker";
export const id="dl_7737f4c4110c4b149c9c";
export const url=new URL("../icons/device-mobile-speaker.svg?v=9009f2dfa51eb47a5bca8a0327fda4cedf603e4e918deafecc71387dd7616e64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
