export const name="quick_reorder-fill";
export const id="dl_5c1aa4737e0546cf89c8";
export const url=new URL("../icons/Q/quick_reorder-fill.svg?v=8a0d94c1edd3819039508f280c94e9650c3ebc91bf8e6e3ab1c3bb5bc6e6f3b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
