export const name="radioactive-duotone";
export const id="dl_a166a9a4ff114763b7fc";
export const url=new URL("../icons/radioactive-duotone.svg?v=1351678cfed13f99025e72c5079e61b50db4a354894a4a6af30bedb277986fd1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
