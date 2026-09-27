export const name="strikethrough_s-fill";
export const id="dl_5a7291b3132be5e54d53";
export const url=new URL("../icons/strikethrough_s-fill.svg?v=0050d952e1187f7f37880077ee3cd27ed9734ad79a07d87ec02a5fce48cf304d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
