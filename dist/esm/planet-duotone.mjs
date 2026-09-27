export const name="planet-duotone";
export const id="dl_0d7ff7f61cf14d4086f2";
export const url=new URL("../icons/planet-duotone.svg?v=b9c91dc449f734f48ec06a2d83d82226b0df30b0e5d266b698d8c7cd5f01c49a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
