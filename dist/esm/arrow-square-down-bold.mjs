export const name="arrow-square-down-bold";
export const id="dl_31928d9ac65a473b8f8d";
export const url=new URL("../icons/arrow-square-down-bold.svg?v=0c96547df03fa49df91ed782cfc2c8b413e9a76df9f7eb9ccc4cbc9983a45666",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
