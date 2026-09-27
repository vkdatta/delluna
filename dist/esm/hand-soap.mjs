export const name="hand-soap";
export const id="dl_2956835b6db54683b3e1";
export const url=new URL("../icons/hand-soap.svg?v=c92463913396643b9ee03e222648dba799922b8a567c15a0f8ef31973ba67614",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
