export const name="arrow-circle-up-right-fill";
export const id="dl_1e8236e525d64cc28ac1";
export const url=new URL("../icons/arrow-circle-up-right-fill.svg?v=fedc0ecde359a95a35a258fa3e13740c504b0894a484dbbc6335662ba90ca329",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
