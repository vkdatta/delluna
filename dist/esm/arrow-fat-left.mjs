export const name="arrow-fat-left";
export const id="dl_7b8c5e66ac3e499388be";
export const url=new URL("../icons/arrow-fat-left.svg?v=9fa6db06c2cb40ca38043390d6fe6812e2d77d8390d9c9c6eddef3b670d04d4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
