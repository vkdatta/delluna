export const name="water_do";
export const id="dl_cf7ccd4440727a6b0baf";
export const url=new URL("../icons/water_do.svg?v=c0a20e33a8f263c91e47b52a68757e4b627f44696d2a116b4a9b3fcf11d62edc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
