export const name="1x_mobiledata-fill";
export const id="dl_c8ca666d64d84012a473";
export const url=new URL("../icons/1/1x_mobiledata-fill.svg?v=020ede539d39901e0603de242aace3627135e2b3949d482196971568e5d0320b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
