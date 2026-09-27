export const name="landscape_2_off-fill";
export const id="dl_b37525b15f2e25c12b14";
export const url=new URL("../icons/landscape_2_off-fill.svg?v=bf490ee0828480205fa2d7a9b106fac7af48998a90f5a2d4e450cca693a0d8bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
