export const name="keyboard_alt-fill";
export const id="dl_7705e506d43582b41401";
export const url=new URL("../icons/keyboard_alt-fill.svg?v=55eba657b7dbfe430d9d6b69c26417649b6a2cda093a51a93cd5be9f9c99f15e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
