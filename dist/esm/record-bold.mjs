export const name="record-bold";
export const id="dl_67d49e8a1cdb489a9d73";
export const url=new URL("../icons/record-bold.svg?v=71c382a2ee2d2682f9e264446ce9a073b6616a3fc099555e224b741bdd5338e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
