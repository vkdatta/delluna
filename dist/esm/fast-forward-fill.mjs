export const name="fast-forward-fill";
export const id="dl_044397962d8e40519a00";
export const url=new URL("../icons/fast-forward-fill.svg?v=8be39d806d46384a635c53ffef51e9c19f91fcbb54901fc52c59ee290edbaf8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
