export const name="azm-fill";
export const id="dl_a70e576fef9f02cf2724";
export const url=new URL("../icons/azm-fill.svg?v=2c857487168285ee181d3bdc60b2c18a51ee0ab8fb3c1515f095fa1cd94e6254",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
