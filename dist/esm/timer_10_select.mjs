export const name="timer_10_select";
export const id="dl_9f83e3776342b8c6d56e";
export const url=new URL("../icons/timer_10_select.svg?v=9d2670a0a5783d14082d031ff4d3b3a9d9d066a6756a474ecc0bfb8a22d92723",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
