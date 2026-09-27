export const name="thermometer_gain";
export const id="dl_2b00aff2d1a9a6c3db43";
export const url=new URL("../icons/thermometer_gain.svg?v=e27dc3e35d44ba93ac996d5cccf198c8265b85a531f7298e1d76ab7261e80e25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
