export const name="bedtime_off-fill";
export const id="dl_b8ef96d64839e748e4be";
export const url=new URL("../icons/bedtime_off-fill.svg?v=edaade1c0c2e52fb0b6de07a5b03aeb6d430e10f813eb03f3bc30294f5bbb692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
