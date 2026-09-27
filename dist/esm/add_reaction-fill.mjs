export const name="add_reaction-fill";
export const id="dl_f29f2c8a0cdceda7e4a3";
export const url=new URL("../icons/add_reaction-fill.svg?v=ff3fdc325668b334b1cffb0a445d6090336325156836bde9a6789e04e22773ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
