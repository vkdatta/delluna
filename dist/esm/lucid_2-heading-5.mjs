export const name="lucid_2-heading-5";
export const id="dl_b084ac4a5e5b4c259dcc";
export const url=new URL("../icons/lucid_2-heading-5.svg?v=debcdafabfba00b6ee111d6d9108ad30f8146169ea9005bb7642f858ccbc9a39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
