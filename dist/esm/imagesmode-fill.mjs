export const name="imagesmode-fill";
export const id="dl_2a0c452646fa63cf2a49";
export const url=new URL("../icons/imagesmode-fill.svg?v=ccb7aa296a5a19fd2ee3a9a8e7b3ffe19151d3bed9e554cc186d130e9879dcd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
