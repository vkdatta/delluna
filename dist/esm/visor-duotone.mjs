export const name="visor-duotone";
export const id="dl_76949e0723a449199d79";
export const url=new URL("../icons/V/visor-duotone.svg?v=f26fe1620507ead33befe1040c7cacbe70d7e56d5d0227e8235a7a2794cb2e14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
