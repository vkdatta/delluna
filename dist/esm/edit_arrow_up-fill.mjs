export const name="edit_arrow_up-fill";
export const id="dl_8dec8b6a744cb57afb02";
export const url=new URL("../icons/edit_arrow_up-fill.svg?v=a3d4317442efc7d080529bbba777e55280901b148834c552e5512d9d2c6e886e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
