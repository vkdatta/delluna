export const name="lucid_2-leafy-green";
export const id="dl_1c938c8da3104940ad4b";
export const url=new URL("../icons/lucid_2-leafy-green.svg?v=d7dbb76fb2670b7136d5699f9d3c83ff29b89e74e567b683c2b30689b62f4553",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
