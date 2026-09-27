export const name="sailboat";
export const id="dl_858d4387da8c5dffa462";
export const url=new URL("../icons/sailboat.svg?v=3aabbdebae70606a180a98cac65790f1936a6bc07c16c6c4eae5a732e2125b77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
