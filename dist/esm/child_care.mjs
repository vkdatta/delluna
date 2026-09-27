export const name="child_care";
export const id="dl_c238cb587ad77aa5896f";
export const url=new URL("../icons/child_care.svg?v=5e116ad3a1475f5cf8ac5c06630d62e7ff1f992ef8d47e3868535482e12e0a38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
