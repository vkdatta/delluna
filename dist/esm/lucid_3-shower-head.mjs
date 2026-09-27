export const name="lucid_3-shower-head";
export const id="dl_ed2249c7e5944ea3b464";
export const url=new URL("../icons/lucid_3-shower-head.svg?v=35611b385a3e78e78a5fbc59aced4b8f96c76b12fe02465c912229f6607f7af3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
