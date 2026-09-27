export const name="circle-dashed-light";
export const id="dl_f4ae541e0f394ec9b755";
export const url=new URL("../icons/circle-dashed-light.svg?v=2c0440ef4bc3c00bcfb3754a3653b5958d0a05ae8f9d773110992f2e4ce77a2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
