export const name="paragraph-light";
export const id="dl_8d41898305264a9a82bf";
export const url=new URL("../icons/paragraph-light.svg?v=99a0f759068cd7c6a34457003ad84dd7bee490b18982fbfdface9588ea9ef2e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
