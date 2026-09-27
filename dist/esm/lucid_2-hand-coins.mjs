export const name="lucid_2-hand-coins";
export const id="dl_72eb8abceaa348eab5b8";
export const url=new URL("../icons/lucid_2-hand-coins.svg?v=1d78845f94ce7a57dea038c3b7818df2fda5c14ae21ef8f1cdb01fe1a554147d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
