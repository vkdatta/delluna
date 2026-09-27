export const name="star-off";
export const id="dl_eb53fbd9c0d1450385d8";
export const url=new URL("../icons/star-off.svg?v=6627b7871a51c8d25818a35bba1eee5e2e02dce30265f65d68e1a02dc802724f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
