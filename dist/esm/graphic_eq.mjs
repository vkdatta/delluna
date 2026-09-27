export const name="graphic_eq";
export const id="dl_11e6de28eba8b7fea40b";
export const url=new URL("../icons/graphic_eq.svg?v=e09f8aaea9d259a9ac5eed939e2d3d48ebadb7b0f4e55326c349e4b4568c2a5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
