export const name="box-arrow-up-light";
export const id="dl_e4653f57a30841a69c25";
export const url=new URL("../icons/box-arrow-up-light.svg?v=250e788c100363f18f8fa0fd4c7abae5c67f425c7f0191bd2eaf55b5d259a224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
