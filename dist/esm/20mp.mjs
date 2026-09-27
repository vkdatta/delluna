export const name="20mp";
export const id="dl_584b2a98faf34d6d4452";
export const url=new URL("../icons/20mp.svg?v=65338a3e16dce41c6985ccd6790a58d22ea721a7da7b0a8ed04c4aae220ab7b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
