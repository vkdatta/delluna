export const name="paint-bucket-light";
export const id="dl_7f6a8ca6ca1843e9b7c3";
export const url=new URL("../icons/paint-bucket-light.svg?v=85be0af6d5d7418b8d17700c6b146ae8facc9498ff64b1784b62ac7354e3a41e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
