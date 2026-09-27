export const name="lucid_3-menu";
export const id="dl_c8908906ec9c4484bdff";
export const url=new URL("../icons/lucid_3-menu.svg?v=cafe5927741ad4c070e13c22a515f76a36f65e039eb21ac7eb322d97d5fa2c60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
