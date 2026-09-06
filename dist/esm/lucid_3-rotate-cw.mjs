export const name="lucid_3-rotate-cw";
export const id="dl_f53d685902a9427f9b7d";
export const url=new URL("../icons/lucid_3-rotate-cw.svg?v=b357fc2ba7ea8b648e8262ac54fa8467a149c02137cd92a8c099de2430e0bab1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
