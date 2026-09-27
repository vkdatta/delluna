export const name="dry";
export const id="dl_cdb773e8126ac4c29a7d";
export const url=new URL("../icons/dry.svg?v=d6c9472c1f6e43fffa607aaad62a1acd262640ca036f6c968c960f50feb87d30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
