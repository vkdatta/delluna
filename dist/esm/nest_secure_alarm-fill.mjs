export const name="nest_secure_alarm-fill";
export const id="dl_b905c2d3bc75b6e16fc7";
export const url=new URL("../icons/nest_secure_alarm-fill.svg?v=c0091130ef74baadb2dfe4dc4a339a4b6188e291f6c1b450fa7819f43f076ded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
