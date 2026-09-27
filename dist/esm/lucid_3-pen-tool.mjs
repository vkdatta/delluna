export const name="lucid_3-pen-tool";
export const id="dl_4dbbb0fc445342088016";
export const url=new URL("../icons/lucid_3-pen-tool.svg?v=71fe3838896d699df3a8a3edbd5c098070c1cbbf9cc6ad28a5a114a14e2a0000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
