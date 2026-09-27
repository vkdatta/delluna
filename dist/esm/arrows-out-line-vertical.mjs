export const name="arrows-out-line-vertical";
export const id="dl_fc5edc2c16354f499098";
export const url=new URL("../icons/arrows-out-line-vertical.svg?v=9a7564ecf46938ce58ef38a912748f987fb001e3761fa1af04ab31557f31cc07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
