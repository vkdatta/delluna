export const name="2k-fill";
export const id="dl_10c32de1baed71d3bcc4";
export const url=new URL("../icons/2k-fill.svg?v=e1854503b658164d0f197640581882b51c0bd743ca056c2d21880b44025f9d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
