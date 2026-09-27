export const name="chevron_line_up";
export const id="dl_c0f24062ca04b2b7f53b";
export const url=new URL("../icons/chevron_line_up.svg?v=300c1f2046ed5556ceffade9e019619d45b3f3d1ce51cc7477d5e6db32f034ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
