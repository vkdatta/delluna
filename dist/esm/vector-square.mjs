export const name="vector-square";
export const id="dl_afe26bf808ea43e99efc";
export const url=new URL("../icons/vector-square.svg?v=dfabdc190207da305ce2f1ac1749389c319d8172d93bcc618378c22c71e0e854",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
