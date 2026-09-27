export const name="5k_plus-fill";
export const id="dl_5222b3dff846072ae659";
export const url=new URL("../icons/5k_plus-fill.svg?v=f4e97d13b6b15025cfc2047d7c20603656b45ea80a7089ca2272b3480075868c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
