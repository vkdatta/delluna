export const name="lucid_1-braces";
export const id="dl_0213e01cad0e43eaa333";
export const url=new URL("../icons/lucid_1-braces.svg?v=009de48de912a82f58f2dbb29c84da0e4c940329b92c6a8285a76e378e8e8d13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
