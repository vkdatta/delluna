export const name="wind-duotone";
export const id="dl_9b16c63c3ceb89769cc7";
export const url=new URL("../icons/wind-duotone.svg?v=a5beec45d7ec8cfb24bf8ec8fdbac82e1867c242f567d4179811f32738353e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
