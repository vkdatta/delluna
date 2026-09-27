export const name="fan";
export const id="dl_969ffb56e12e4d61b97a";
export const url=new URL("../icons/fan.svg?v=263af20ca86ffc936f2e564bee76228c5f87a46e610d75e23d384a787afcf79e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
