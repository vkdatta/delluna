export const name="cloud-x-fill";
export const id="dl_c5a80c6f77a14947896c";
export const url=new URL("../icons/cloud-x-fill.svg?v=77251edab302a93f08bd4ad45acd58787eb77ad1158a0dea447205cb2baba883",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
