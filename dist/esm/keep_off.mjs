export const name="keep_off";
export const id="dl_66623a3a1d82735acda6";
export const url=new URL("../icons/keep_off.svg?v=8cf4f3fa2c1855e492e3bb46305f6aff3f4aedea01843fa3ce0af3a4d85b3dfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
