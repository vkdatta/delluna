export const name="lucid_1-chart-area";
export const id="dl_438d9679f3ef43ffa61a";
export const url=new URL("../icons/lucid_1-chart-area.svg?v=00bd28c5ec7c18db5287b7618988544cf784215a2bef9ef48fe4e5afca36118d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
