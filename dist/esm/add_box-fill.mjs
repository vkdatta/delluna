export const name="add_box-fill";
export const id="dl_98b0dd0b4d76cefcc069";
export const url=new URL("../icons/add_box-fill.svg?v=ca16e7a7cb9bc681f9af5eef1216c518571f11759d2abbbeba79d91455d312d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
