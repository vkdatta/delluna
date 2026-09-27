export const name="pinch_zoom_out";
export const id="dl_4f253fec04be8129d6db";
export const url=new URL("../icons/pinch_zoom_out.svg?v=76d13d7f0ef72013746173fb1e18c57f8455c6ec1cbc48e730ab78677b61d7da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
