export const name="bell-ringing-fill";
export const id="dl_614eb91ec2fc406e8060";
export const url=new URL("../icons/bell-ringing-fill.svg?v=31f76a0e523232108f698d66547ae60ae0ae255de3580ad37fac5e3adf265b54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
