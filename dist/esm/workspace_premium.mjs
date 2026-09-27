export const name="workspace_premium";
export const id="dl_56c74050dfaf9d9e2703";
export const url=new URL("../icons/workspace_premium.svg?v=821f07d27fe9f4a6b1e508ecf443354bc771baacb5fe1f2f06bcf3885226d652",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
