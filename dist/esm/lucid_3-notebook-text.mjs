export const name="lucid_3-notebook-text";
export const id="dl_eacf20dbbb4349d9b904";
export const url=new URL("../icons/lucid_3-notebook-text.svg?v=7ff6fe899bc8b63fe78b11026568e76f2e4a47ab37dc600c567ba9a0feeda3d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
