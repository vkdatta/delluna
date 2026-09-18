export const name="lan-fill";
export const id="dl_2606630d440146d798e9";
export const url=new URL("../icons/L/lan-fill.svg?v=a8b4fb54183a23f89f93693fd0d60b64a4d04852ecc95158536399f725ad42bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
