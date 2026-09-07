export const name="layers_down";
export const id="dl_10de0a0eaa2a458f86b6";
export const url=new URL("../icons/all_60_named_svgs/layers_down.svg?v=0b101ff89eb22fb4b6d979e47735d5d90b391374a72326b8c4425bc3f5abf37c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
