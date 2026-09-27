export const name="drop-simple";
export const id="dl_d4cd8fe355f549159953";
export const url=new URL("../icons/drop-simple.svg?v=66d42c61ec1f8daf1777e2c3d363482c5b8dc8f244863db7a0b34bc1fb8055f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
