export const name="fish-simple";
export const id="dl_fdc565403c694491b99f";
export const url=new URL("../icons/fish-simple.svg?v=92c937237fab3241fc092cb3167ca511a1a21464d7fd05fe18bce54b678f9dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
