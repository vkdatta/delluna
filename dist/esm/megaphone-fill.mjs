export const name="megaphone-fill";
export const id="dl_ffe64943cb804b619eb5";
export const url=new URL("../icons/megaphone-fill.svg?v=d72364995f3229c2d50717834b8eceb9284899d97c4531bf8be28f421f933992",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
