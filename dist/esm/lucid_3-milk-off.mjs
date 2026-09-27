export const name="lucid_3-milk-off";
export const id="dl_61172184b281481c8326";
export const url=new URL("../icons/lucid_3-milk-off.svg?v=5d0d9a7f0fc48b4065a3bb10355447506925a9d528e25dd6608f279b082d7084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
