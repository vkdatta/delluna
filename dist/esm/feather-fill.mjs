export const name="feather-fill";
export const id="dl_c3093b64334b44f387cd";
export const url=new URL("../icons/feather-fill.svg?v=702258705d36e9c59bd9dbcce313f44994313843a339eb02f4c26a27ca13b701",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
