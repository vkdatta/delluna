export const name="format_align_right";
export const id="dl_8a995e9f739843bd3b2a";
export const url=new URL("../icons/format_align_right.svg?v=7eb7f97feacadd89337be73e4a6153cfd60f4ca3367d9248ba5116194cd484fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
