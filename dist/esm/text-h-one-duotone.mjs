export const name="text-h-one-duotone";
export const id="dl_1783e79fa92be5947234";
export const url=new URL("../icons/text-h-one-duotone.svg?v=2d2349751e8aee36cf9739e49efc62d1064911401b764ce3574af385782490c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
