export const name="pergola-fill";
export const id="dl_dade5aaaeda5a42a424b";
export const url=new URL("../icons/pergola-fill.svg?v=7f3674622c28899aa37d10aaeefec0dad7ee70e105c716846d73f019250dd748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
