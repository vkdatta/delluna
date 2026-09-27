export const name="ranking";
export const id="dl_895ac177c571400c924d";
export const url=new URL("../icons/ranking.svg?v=306f2caba03e4af7c03a88abc05b9ab02974f91e8fa46b80b3dcc24853122ef8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
