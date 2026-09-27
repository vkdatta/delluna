export const name="lucid_1-airplay";
export const id="dl_07384a3abf1941b3ac3f";
export const url=new URL("../icons/lucid_1-airplay.svg?v=1d42c6ec4ca6626a58d437f0a9758d09d9494caa79b29111a66b58335176a33c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
