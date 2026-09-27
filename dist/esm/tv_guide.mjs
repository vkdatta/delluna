export const name="tv_guide";
export const id="dl_f0b4d0baa182fc26b019";
export const url=new URL("../icons/tv_guide.svg?v=aabf4901fc951d444e3becfad3ea9af38565530987e344e5bdacf12b9131ab4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
