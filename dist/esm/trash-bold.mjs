export const name="trash-bold";
export const id="dl_7c970015341ba4fee0bc";
export const url=new URL("../icons/trash-bold.svg?v=ea787fc75cd5907a997f26407f17a4e3ac69c9421ac628415dda212ac8a04341",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
