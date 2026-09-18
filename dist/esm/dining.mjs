export const name="dining";
export const id="dl_fe8d419858db44c89251";
export const url=new URL("../icons/dining.svg?v=6ced25b367d7d7d8d1a23ecb20e31b996cc976862a328a1f389ae9e38cf75ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
