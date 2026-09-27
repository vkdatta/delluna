export const name="amend";
export const id="dl_6aaccbe36eaff03f6c0b";
export const url=new URL("../icons/amend.svg?v=196b32bc2b5eb25e1a39930dd1d09f8e364203b3950cc859cecd85f8f9ed4311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
