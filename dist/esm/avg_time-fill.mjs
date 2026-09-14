export const name="avg_time-fill";
export const id="dl_4ff6053fba074990ad94";
export const url=new URL("../icons/A/avg_time-fill.svg?v=d7f6e19954cbcc212b691c8a29d83bdb3daa273eccd95c9a16397c4597bad1fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
