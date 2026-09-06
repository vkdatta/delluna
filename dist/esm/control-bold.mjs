export const name="control-bold";
export const id="dl_5af74bd3c6394a30b3c5";
export const url=new URL("../icons/control-bold.svg?v=358ba046204057b9967840b846b9cebada7cdc1a37bb0c968ab85c3648225943",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
