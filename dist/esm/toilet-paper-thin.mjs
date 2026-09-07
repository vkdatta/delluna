export const name="toilet-paper-thin";
export const id="dl_c2b3fd6530f24beba4a3";
export const url=new URL("../icons/T/toilet-paper-thin.svg?v=194cccbaa45a8b1a3740b759b974b6ad405d077097ea0ca6578ae73154a7d63b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
