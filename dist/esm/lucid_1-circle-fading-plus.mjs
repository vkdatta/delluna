export const name="lucid_1-circle-fading-plus";
export const id="dl_5c5b305f55854ae3bb6e";
export const url=new URL("../icons/lucid_1-circle-fading-plus.svg?v=daea9cf669dfeff258761adffa1d87f843c8ea7ca6db5e992ba1303cc35eeafa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
