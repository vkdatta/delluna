export const name="border_inner-fill";
export const id="dl_454113d7922cfb3affad";
export const url=new URL("../icons/border_inner-fill.svg?v=1537e796272c45b4b6fdaf96754cc2db1b95fbb60cee99c1c9b9e7bfa1cbc7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
