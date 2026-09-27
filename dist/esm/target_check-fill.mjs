export const name="target_check-fill";
export const id="dl_a822fb65385436ba4b5f";
export const url=new URL("../icons/target_check-fill.svg?v=d344a196bf091a5a2a18b97022a077b694f00c88dbbb6f30aaffbe6dc059eb82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
