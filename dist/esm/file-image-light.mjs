export const name="file-image-light";
export const id="dl_6855bf60552c4620a317";
export const url=new URL("../icons/file-image-light.svg?v=86739d1242892529dd1683351cc791cc2d27bc48bdb15d6e6cc7b042849960c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
