export const name="figma-logo-light";
export const id="dl_e43f691def714b9b94a9";
export const url=new URL("../icons/figma-logo-light.svg?v=e598a6247d931f919d3c6ed0aaea07c72d93e5aa9d9bc6b9bb8b704a1b055b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
