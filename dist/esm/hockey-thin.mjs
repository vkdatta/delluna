export const name="hockey-thin";
export const id="dl_8e2c4454ff3c41cabc9a";
export const url=new URL("../icons/hockey-thin.svg?v=d59b38e5d44de37e4f17697ea7d987c494bbbb6d7972d1b1aa508976b1e899f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
