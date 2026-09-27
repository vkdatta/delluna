export const name="position_top_right";
export const id="dl_701dd71ec2a16b81d360";
export const url=new URL("../icons/position_top_right.svg?v=dcb10709874b7125a94ef5dd30e51f19f15a9050cb48cf9a57bc2e797ca2cb69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
