export const name="speaker-low-bold";
export const id="dl_8873ed2ae9743aa88d27";
export const url=new URL("../icons/speaker-low-bold.svg?v=8cade67e9d9af2ed0f1d63a9534a2bb2b28876032893e2bcbdd77e9c83beab7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
