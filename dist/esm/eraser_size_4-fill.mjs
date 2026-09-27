export const name="eraser_size_4-fill";
export const id="dl_3103206a06ad1e3ed74c";
export const url=new URL("../icons/eraser_size_4-fill.svg?v=7d11467737694128552ec6c6aa895e6b723fafa2ee1ab29ef5b1bc0d3c07c537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
