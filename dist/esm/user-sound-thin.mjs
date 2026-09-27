export const name="user-sound-thin";
export const id="dl_e3a20f831d31eb72a7ee";
export const url=new URL("../icons/user-sound-thin.svg?v=0706367e6d1d6ac4b9b058aaff1c3a7f8310f19edf870543fe90b4d62d6ce64e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
