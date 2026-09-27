export const name="gif_box-fill";
export const id="dl_59858d2a40fdeb86a71a";
export const url=new URL("../icons/gif_box-fill.svg?v=82f4b16d288909646584914fe5f62764e409f11cdce204ffe803bccaa48fbc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
