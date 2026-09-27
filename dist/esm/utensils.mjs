export const name="utensils";
export const id="dl_6f26f1443cf24a509ac2";
export const url=new URL("../icons/utensils.svg?v=835c85f68289f741e596defa4f48c91db0821b7ec37a624b403591c399024f37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
