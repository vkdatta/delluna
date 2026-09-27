export const name="x_circle-fill";
export const id="dl_d50001f9c00b5c8f13e0";
export const url=new URL("../icons/x_circle-fill.svg?v=283bd0602962f777eaa866b60157512bd2bf74acd98dc421056cc7b79b1e2e0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
