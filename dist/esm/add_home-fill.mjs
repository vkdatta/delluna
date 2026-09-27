export const name="add_home-fill";
export const id="dl_23ca67f25aefbb5ffee5";
export const url=new URL("../icons/add_home-fill.svg?v=e95debe9c15a33b5666f6441cbea363b283ddd48ef819fd7ac7c86fb4a153771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
