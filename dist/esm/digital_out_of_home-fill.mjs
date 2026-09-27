export const name="digital_out_of_home-fill";
export const id="dl_a676304cea4f394a3e18";
export const url=new URL("../icons/digital_out_of_home-fill.svg?v=ddec35b74aa9c1c862180c5c8a81ed10b2f2ba8f73521a295e828d94223701d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
