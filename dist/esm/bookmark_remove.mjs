export const name="bookmark_remove";
export const id="dl_0f620e69eaf2d24fa785";
export const url=new URL("../icons/bookmark_remove.svg?v=afc4d8916d4e617363be8f663df8bf8f5d97733ff6588ad4ff0734c40297ea2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
