export const name="inbox_customize-fill";
export const id="dl_74e6a2d6fdd3de4619aa";
export const url=new URL("../icons/inbox_customize-fill.svg?v=2d6a196e97d3ed27016efe9c2613ee591cfe9206267a172ca79c9ac4cad1564e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
