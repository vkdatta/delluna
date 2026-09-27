export const name="rule_folder-fill";
export const id="dl_61f9477065edf0ea13b5";
export const url=new URL("../icons/rule_folder-fill.svg?v=ee79964cb03337019e6898ed22dba00ce1633af7aa5175243a5ca26f6a33309c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
