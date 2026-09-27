export const name="sunglasses-fill";
export const id="dl_e0d0c492eb8ca1b9334f";
export const url=new URL("../icons/sunglasses-fill.svg?v=5158ea58b06a5b5100a29022b8436de9dd8ad7f731af2365d996c0d07e3ae10a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
