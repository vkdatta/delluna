export const name="funicular";
export const id="dl_c1dd523d59064a8c63d0";
export const url=new URL("../icons/funicular.svg?v=a105a6fdec4bceeb0a3e8f12a290a4cba34b851fd3afc6585a7863597d42cdf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
