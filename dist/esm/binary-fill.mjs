export const name="binary-fill";
export const id="dl_0a17650d634e48acb5d6";
export const url=new URL("../icons/binary-fill.svg?v=141a7859adb9915772ee935e49bc646d0f30432925d6d164ecedac5a7c3962be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
