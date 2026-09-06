export const name="rectangle-duotone";
export const id="dl_0f77ec179f4340e1a49b";
export const url=new URL("../icons/rectangle-duotone.svg?v=6998113a7868008c817547c1bbe335e14e860139fcc5d9627b39f1cb29d3153a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
