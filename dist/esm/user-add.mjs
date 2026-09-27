export const name="user-add";
export const id="dl_d7f8f5461f05dcb452ae";
export const url=new URL("../icons/user-add.svg?v=4ac558353ccd40e58d8ebde50326f52e1c907dd945da562e902231f426bb956b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
