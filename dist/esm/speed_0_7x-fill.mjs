export const name="speed_0_7x-fill";
export const id="dl_1d0c3e65c36145a399e0";
export const url=new URL("../icons/S/speed_0_7x-fill.svg?v=5ebf9517e557fe7a08f47ec2e000404f82f50f752db533f378c77a603fe9cb3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
