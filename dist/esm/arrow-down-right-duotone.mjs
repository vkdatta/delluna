export const name="arrow-down-right-duotone";
export const id="dl_2f1dfcbef49f47f8bcb9";
export const url=new URL("../icons/arrow-down-right-duotone.svg?v=1bdd40915eb162533a7213a9be7a61feb1097ce5e5634bcc48ca10a322cf4f7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
