export const name="timer-off";
export const id="dl_ea685f37361d4a65abe7";
export const url=new URL("../icons/timer-off.svg?v=7c31a62b71cb5e70815c5ef3d011bf23d778e2e8f969d8d8f216ad4400b4194b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
