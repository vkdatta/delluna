export const name="face_down-fill";
export const id="dl_5efb5483abed4cffa1b5";
export const url=new URL("../icons/face_down-fill.svg?v=94004d5bc8fb8d7a97dba654f731baa519896c7278ba18036f7464b126445ca8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
