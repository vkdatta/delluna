export const name="sentiment_extremely_dissatisfied-fill";
export const id="dl_b5a0cbc4a456cdb83e09";
export const url=new URL("../icons/sentiment_extremely_dissatisfied-fill.svg?v=35eaac81aab1b107965ff6bae1e1e14274cce5d278207f96a37b2566759bc182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
