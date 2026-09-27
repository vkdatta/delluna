export const name="noise_control_off-fill";
export const id="dl_0d793da8f433eb3ebd91";
export const url=new URL("../icons/noise_control_off-fill.svg?v=10712d7c1cdee61de06eb023807be82cfd1fb75aa29592c0144781a806c0e2f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
