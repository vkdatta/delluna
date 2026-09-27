export const name="lucid_1-clapperboard";
export const id="dl_bfab0c69cd3d42689bc7";
export const url=new URL("../icons/lucid_1-clapperboard.svg?v=c1798a5c93f26241d4f993871a5cfda8d1c23415eb06e1fcb4ebe0c2db878609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
