export const name="touch_app-fill";
export const id="dl_4305cb28d70812ff9578";
export const url=new URL("../icons/touch_app-fill.svg?v=63c3e521aa31bf8cb450746c35fae95bc6beda2d789ddd5b3db9f927b05d34a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
