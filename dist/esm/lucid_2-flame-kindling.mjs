export const name="lucid_2-flame-kindling";
export const id="dl_ea90aefef1ea4702bb6f";
export const url=new URL("../icons/lucid_2-flame-kindling.svg?v=73edd4044e09b7493dab2aa4f7786c697e98d4ef1b91ffa10f36286759f9b3d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
