export const name="add_circle-fill";
export const id="dl_bb8198cf6298c335ed90";
export const url=new URL("../icons/add_circle-fill.svg?v=db3da1fece3dd20990568245e69585564f825a169a17df45cc65262238ed8729",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
