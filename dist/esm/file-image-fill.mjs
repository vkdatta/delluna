export const name="file-image-fill";
export const id="dl_a5f517dad7a649f0ba3c";
export const url=new URL("../icons/file-image-fill.svg?v=0266eb983ed5cec9152d76691152123b92b2cb84d8c139c37793d0870df3f601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
