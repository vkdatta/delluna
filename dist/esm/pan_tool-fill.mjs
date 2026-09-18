export const name="pan_tool-fill";
export const id="dl_734761b613a64fe1a5ff";
export const url=new URL("../icons/pan_tool-fill.svg?v=3638426a793c02afda414446fd3cb55465d62097f3cf5395ee29b4d7c1d97acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
