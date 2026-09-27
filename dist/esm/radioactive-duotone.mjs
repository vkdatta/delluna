export const name="radioactive-duotone";
export const id="dl_a166a9a4ff114763b7fc";
export const url=new URL("../icons/radioactive-duotone.svg?v=7ff6b412e4e6a1a28e9e78996797bb35f58e87fdec0951132f3ba9edce4a4f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
