export const name="noise_aware-fill";
export const id="dl_78425ae6379fadaaa40a";
export const url=new URL("../icons/noise_aware-fill.svg?v=a7637baf379b7da98b033d9a6836e56fb33f38c462f8eeeb9afd0392f2018d00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
