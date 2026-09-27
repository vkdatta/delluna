export const name="boxing-glove";
export const id="dl_dbdbaef1d86e4637845b";
export const url=new URL("../icons/boxing-glove.svg?v=c4bfca2c533fb24d8f573eceb8f8c5860b39db036d3762a4735627ce8d7b59b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
