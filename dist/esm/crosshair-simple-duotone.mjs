export const name="crosshair-simple-duotone";
export const id="dl_a05848b487bb41198b27";
export const url=new URL("../icons/crosshair-simple-duotone.svg?v=05f1fc9476ab51dcd097dac2a8a733c76c1129b8963959729aaf1718d66aee16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
