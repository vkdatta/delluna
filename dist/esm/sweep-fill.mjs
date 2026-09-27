export const name="sweep-fill";
export const id="dl_8eb725761c42c5d5456e";
export const url=new URL("../icons/sweep-fill.svg?v=839c55f89ea5c401e094b73a6c5886fa0bbafbec8bed4c64f98312042bf1af35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
