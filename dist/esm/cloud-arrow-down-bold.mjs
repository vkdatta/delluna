export const name="cloud-arrow-down-bold";
export const id="dl_bbea51765f1c4d43ac79";
export const url=new URL("../icons/cloud-arrow-down-bold.svg?v=765728b35c67422d2cc900a77ac4ba34bbaa65ec1fd1ddd9b0bcdd3a4d3a87e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
