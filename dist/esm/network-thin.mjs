export const name="network-thin";
export const id="dl_772f66090b364fc5b0b6";
export const url=new URL("../icons/network-thin.svg?v=9998a1591c92b02c625e43b8580f897c236b19e3539ab415d2aeeeaf219ba32b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
