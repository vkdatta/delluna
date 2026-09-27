export const name="arrow_drop_down_circle";
export const id="dl_b28aeec879900fe93772";
export const url=new URL("../icons/arrow_drop_down_circle.svg?v=4475fbd323444bdd1d02a9af312f69fd3c8ac6ccc21da829145b71d3f2caf39d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
