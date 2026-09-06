export const name="lucid_1-circle-dot";
export const id="dl_12b67f9146014f2098ad";
export const url=new URL("../icons/lucid_1-circle-dot.svg?v=50436650c89cf56f9c72ed79d15d6a07dea5868e49e8352eaf637b2f51212d83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
