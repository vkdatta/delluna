export const name="pipeline";
export const id="dl_1c9104c9776c4707b589";
export const url=new URL("../icons/pipeline.svg?v=7f569523eacf0d109145d1012a0ddae102be343c2e4d7c1fc887e77db74e77a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
