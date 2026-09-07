export const name="toggle-left-thin";
export const id="dl_4c7ec971e98d4dfcb894";
export const url=new URL("../icons/T/toggle-left-thin.svg?v=f40d58d3e361417f948c2632082936fcd4bab4ae73b1295ea1f139e108acc3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
