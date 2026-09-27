export const name="wall_art";
export const id="dl_3706ada3cdaad89def2e";
export const url=new URL("../icons/wall_art.svg?v=c4af21dcd3a249e95fe1b740817c85b5d0a09919a63822de74ee22040e6bc4e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
