export const name="lightning-a-thin";
export const id="dl_f534e2a3aeaa4989b94c";
export const url=new URL("../icons/lightning-a-thin.svg?v=ec3fff66de0bff0d3542573ecaad864541e70d14e115fed11c28522859be40fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
