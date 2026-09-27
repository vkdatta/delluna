export const name="stethoscope_check-fill";
export const id="dl_f1481ba311b66a15a8f3";
export const url=new URL("../icons/stethoscope_check-fill.svg?v=a5e197c0a658cbda30620701a9e4f984eabf5f30bb5bf5bd333f73f936c7b2bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
