export const name="avg_time-fill";
export const id="dl_15b5366d415bc424d170";
export const url=new URL("../icons/avg_time-fill.svg?v=7c31caf7e770656a241210edeaec214122e6e5b2b5f1dc30e6e4a5b012205483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
