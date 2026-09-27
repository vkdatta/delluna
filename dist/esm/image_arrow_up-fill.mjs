export const name="image_arrow_up-fill";
export const id="dl_87f150f554facc93b351";
export const url=new URL("../icons/image_arrow_up-fill.svg?v=85eb073a5b0deea60e87aa9e9542de5ce290f3402a1e2649d9ef3a29346478d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
