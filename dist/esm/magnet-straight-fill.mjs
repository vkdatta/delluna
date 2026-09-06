export const name="magnet-straight-fill";
export const id="dl_5de69d358d9f468c8315";
export const url=new URL("../icons/magnet-straight-fill.svg?v=b6070825be6150e2ac010fea8deac42be8ccc5e34e1842e0030d4fc718cfd133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
