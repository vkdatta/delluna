export const name="matrix-logo-duotone";
export const id="dl_cc7a0b55adec4987a9a6";
export const url=new URL("../icons/matrix-logo-duotone.svg?v=33ff1ef01ad563d5b1fb4a55d8cb9de98034bad1434fd0e881a841af75799a72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
