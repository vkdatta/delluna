export const name="lucid_3-spotlight";
export const id="dl_d948959185c74c728d36";
export const url=new URL("../icons/lucid_3-spotlight.svg?v=1d92c73bf951a3730ccf58727c5863c52f0124ebfeeb027dce782cbbd38a282c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
