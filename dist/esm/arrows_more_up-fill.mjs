export const name="arrows_more_up-fill";
export const id="dl_4820d3a5caf87c6c2d67";
export const url=new URL("../icons/arrows_more_up-fill.svg?v=b4c12fc7ecfe40cf5c33f7d3d342a323011d3b90903eb782b16190380e2ef18d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
