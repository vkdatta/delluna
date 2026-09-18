export const name="post-fill";
export const id="dl_b83c9ed4277643bebd8e";
export const url=new URL("../icons/post-fill.svg?v=99ccffaa87da6e66b00a409f891c43e62fa49b98bc3307e348162564a622e0fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
