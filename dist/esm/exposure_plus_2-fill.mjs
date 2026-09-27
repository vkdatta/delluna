export const name="exposure_plus_2-fill";
export const id="dl_3fd2e2171e451de50109";
export const url=new URL("../icons/exposure_plus_2-fill.svg?v=b13e6a65244535964f5f2c6c00f9844e6901c7a54dc07b7a54a783914d6f2d1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
