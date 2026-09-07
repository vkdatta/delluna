export const name="computer-tower-light";
export const id="dl_f5eaf291ed6e49e6909b";
export const url=new URL("../icons/computer-tower-light.svg?v=ffd586b0d5ebc47e9c34a5985c8364d7808d2ffffb3fcb2e85d9da9befae4c97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
