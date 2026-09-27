export const name="radio-light";
export const id="dl_bb4b84d711ae4c489952";
export const url=new URL("../icons/radio-light.svg?v=1205f38bb2c8fdfdaea8eff1b6c144223e06ec2a81c9d16e0a66fbd7515e1941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
