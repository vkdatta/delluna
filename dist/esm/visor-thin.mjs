export const name="visor-thin";
export const id="dl_da5883f0fee04efab707";
export const url=new URL("../icons/V/visor-thin.svg?v=806f65017861e961f37bc067eda6f564d2aa7001bfcb71bc61e6e7c5a43c3b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
