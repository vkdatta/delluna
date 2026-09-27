export const name="minus-light";
export const id="dl_93d4e157b0254f7e9589";
export const url=new URL("../icons/minus-light.svg?v=3e8b62f602937b28e8469005c4be08f5f7a2d24d15d243bf65d0705cd59fb044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
