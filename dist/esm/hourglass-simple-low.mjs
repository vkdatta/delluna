export const name="hourglass-simple-low";
export const id="dl_debbff1ca68d4dc68f37";
export const url=new URL("../icons/hourglass-simple-low.svg?v=ed0694500f3f465b991d1d4dbef4f2ded3075c6e3dc0530847a867532e6d3c25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
