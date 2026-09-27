export const name="border_top-fill";
export const id="dl_7cab1a3cc4897f1a7231";
export const url=new URL("../icons/border_top-fill.svg?v=006b3345c94f440d58aeddadbd22f25678b43e712d62a71cf416da04a787ccd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
