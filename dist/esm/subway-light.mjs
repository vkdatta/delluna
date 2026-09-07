export const name="subway-light";
export const id="dl_9072f980be9746fc821c";
export const url=new URL("../icons/S/subway-light.svg?v=695f7778e5644d1c6d2d0d34669a267ea378b1267b93bccea9a1a02cde669329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
