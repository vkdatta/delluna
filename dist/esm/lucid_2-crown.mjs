export const name="lucid_2-crown";
export const id="dl_814b15d2672841dfb73e";
export const url=new URL("../icons/lucid_2-crown.svg?v=b8394459626265903ec8d1c6a64864643af40a6df79e96078df9ec3d38757680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
