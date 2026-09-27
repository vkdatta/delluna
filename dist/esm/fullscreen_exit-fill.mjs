export const name="fullscreen_exit-fill";
export const id="dl_3c768befb6ada02e8c8e";
export const url=new URL("../icons/fullscreen_exit-fill.svg?v=e88d438ef69eec73b34b1e4a787aa980af19291adc9d0a584957cc4a8164b25a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
