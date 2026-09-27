export const name="threads-logo-bold";
export const id="dl_24f24aaac76d1b90ab50";
export const url=new URL("../icons/threads-logo-bold.svg?v=eccc31a1746a2291c066eb94b98c3113ce82d2ab59f368f9cf3535ce1a55a1d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
