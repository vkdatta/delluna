export const name="solar-roof-bold";
export const id="dl_62a74656fa104c939661";
export const url=new URL("../icons/S/solar-roof-bold.svg?v=70e43029387a4f7d7dd3ddae92dc15cd77a94afd3ee8a5709a669b638413cb88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
