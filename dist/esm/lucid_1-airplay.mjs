export const name="lucid_1-airplay";
export const id="dl_07384a3abf1941b3ac3f";
export const url=new URL("../icons/lucid_1-airplay.svg?v=3f71a132900c142871332ea25bed5aa5c3bdc79ff89a6c3fccae7185e15c42d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
