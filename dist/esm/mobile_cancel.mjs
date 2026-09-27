export const name="mobile_cancel";
export const id="dl_9fa1c504d1b0c57dda9d";
export const url=new URL("../icons/mobile_cancel.svg?v=4f62f51ef009b671d2c1723d23392a0bbb0ca7859a3631f1bed1def2871d515d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
