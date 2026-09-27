export const name="lucid_3-move-3d";
export const id="dl_c7fa904ecddc41e3a2c1";
export const url=new URL("../icons/lucid_3-move-3d.svg?v=d35b8440dc95a78fe067de9c08471dac80304ed78497574df9eb849f61f1e42f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
