export const name="difference-fill";
export const id="dl_fb8b7483e6afde70890a";
export const url=new URL("../icons/difference-fill.svg?v=76db466306f6b0068dba73b7d5e2e2290e137ce947ef81429893550808ad92e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
