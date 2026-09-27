export const name="ear-slash-fill";
export const id="dl_dfdb2cf6479c40ebbda7";
export const url=new URL("../icons/ear-slash-fill.svg?v=53217f3e8c9695a6a73c30407cf3977a81754c8332951cc5fb6390912db23321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
