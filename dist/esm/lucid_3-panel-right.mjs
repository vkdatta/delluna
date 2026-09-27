export const name="lucid_3-panel-right";
export const id="dl_ed19e1b7dcd245858b0a";
export const url=new URL("../icons/lucid_3-panel-right.svg?v=688e4f3fcc90bf33efc47610bf63f18af92c3cfc579e09bea1cfbdfae28a31f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
