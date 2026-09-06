export const name="gas-can-thin";
export const id="dl_e71cbe5bf6144b7cac7d";
export const url=new URL("../icons/gas-can-thin.svg?v=e53486fdc1460a7766136e48db505f1f2eaa7b18e5ab1773c69af8cb087f2f43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
