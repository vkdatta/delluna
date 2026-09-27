export const name="brain-fill";
export const id="dl_0cd4fc51292b4d6d969e";
export const url=new URL("../icons/brain-fill.svg?v=c1545624bbb59dd13b8b1816d1df512d482ef97f0d66a4c515e0c66c1e1b5f1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
