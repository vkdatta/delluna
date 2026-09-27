export const name="lucid_1-arrow-big-right";
export const id="dl_e0679ac153864315928c";
export const url=new URL("../icons/lucid_1-arrow-big-right.svg?v=49cf696feb7a3a5a0cda6f99ec9aae97f7d61a9e42e8249135a6e563a6b3c6e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
