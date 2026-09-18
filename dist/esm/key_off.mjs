export const name="key_off";
export const id="dl_88aad9aec7cd49b8995e";
export const url=new URL("../icons/K/key_off.svg?v=33940b299c77646c84a1c5340bbdbe827174a29fb3684b7e2da13db43daed1b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
