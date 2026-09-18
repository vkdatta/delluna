export const name="build_circle";
export const id="dl_23ac0488fb054a28b874";
export const url=new URL("../icons/build_circle.svg?v=05f34c52218025a8e06b8911acfd0018a6edc69a2fcb2a85eca75e28ae974d3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
