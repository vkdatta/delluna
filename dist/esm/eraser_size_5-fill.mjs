export const name="eraser_size_5-fill";
export const id="dl_6944755df7084b5b90f9";
export const url=new URL("../icons/eraser_size_5-fill.svg?v=3273f2d03a089b51419ee07ff71faeb9ee69c86809ab82a376736ed7376c3d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
