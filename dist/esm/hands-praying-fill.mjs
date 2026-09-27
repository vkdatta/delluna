export const name="hands-praying-fill";
export const id="dl_9f1f4befa7aa4cf09717";
export const url=new URL("../icons/hands-praying-fill.svg?v=cbc4ac78974baaab68106e9c588c308779b7678b0d264784d0dc77fbd08df9df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
