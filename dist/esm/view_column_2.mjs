export const name="view_column_2";
export const id="dl_550d0cc21da50acd3093";
export const url=new URL("../icons/view_column_2.svg?v=18ddf5c2c4e59e0fee0256e042cbf1ad5402f91b3ee0754da431d9a43f41437d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
