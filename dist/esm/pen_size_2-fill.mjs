export const name="pen_size_2-fill";
export const id="dl_b9bad4f8c0de45c798a3";
export const url=new URL("../icons/pen_size_2-fill.svg?v=2211efe8bac2f22aee7ce53fb313c651c6b1983c4bdf1be503de969e02b4fab6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
