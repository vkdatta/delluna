export const name="headset-bold";
export const id="dl_fd0fa3ed67024c30adcc";
export const url=new URL("../icons/headset-bold.svg?v=703d95d90b51c66dd8181060e06a20daed598a55a0e07d90795615d05ac62133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
