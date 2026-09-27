export const name="graphics-card-duotone";
export const id="dl_869770e81c7b4659af45";
export const url=new URL("../icons/graphics-card-duotone.svg?v=8b7dc1320cbda9b0d27e228ecbb34cb986feac893e5b1dbc72e47843881eb051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
