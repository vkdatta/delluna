export const name="child_hat";
export const id="dl_78ad91f79e605ce8a8e7";
export const url=new URL("../icons/child_hat.svg?v=aec3b986923f37cad1dfd5c125df4092047ceec711fa182237da92d22a352d11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
