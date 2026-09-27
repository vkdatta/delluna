export const name="archive-thin";
export const id="dl_18810073af82419f9bac";
export const url=new URL("../icons/archive-thin.svg?v=dd4180c9472f1a99f7babc8ef863540db07ab16a430f68390220c3efce009384",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
