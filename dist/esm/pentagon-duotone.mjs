export const name="pentagon-duotone";
export const id="dl_95ad3233fcb248f2939c";
export const url=new URL("../icons/pentagon-duotone.svg?v=42e598493bec37518457d13754dbb71fa04963e1cb8ed39a44bf64f5d7a30047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
