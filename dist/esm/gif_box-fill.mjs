export const name="gif_box-fill";
export const id="dl_5e457e52f6c708195840";
export const url=new URL("../icons/gif_box-fill.svg?v=5504bc842dc356e2533453bb57998cc4f825ae1b84edab8a8f1e09668f29e7c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
