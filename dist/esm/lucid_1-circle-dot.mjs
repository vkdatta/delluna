export const name="lucid_1-circle-dot";
export const id="dl_12b67f9146014f2098ad";
export const url=new URL("../icons/lucid_1-circle-dot.svg?v=a8f94cadaf8e593626b7606b6a3c6428937b44de15e2369664df3d38e991f1bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
