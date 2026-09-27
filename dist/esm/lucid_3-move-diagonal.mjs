export const name="lucid_3-move-diagonal";
export const id="dl_7f2e95cac28442d49bea";
export const url=new URL("../icons/lucid_3-move-diagonal.svg?v=3da1d50c1190e56f6dd1dabcda82a6639beb0f9c3d44b2c0c10189480eae15e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
