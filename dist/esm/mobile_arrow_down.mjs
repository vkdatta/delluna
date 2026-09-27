export const name="mobile_arrow_down";
export const id="dl_6fd6b7e41574068d75e9";
export const url=new URL("../icons/mobile_arrow_down.svg?v=9de713c81bf4259c5e0f86d95c40f6f191da27ee410ea3518e2ec2a8097c1524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
