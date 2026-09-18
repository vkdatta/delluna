export const name="hide_image";
export const id="dl_aa77154ba19e4e96ab7e";
export const url=new URL("../icons/hide_image.svg?v=cf282d6ce3b2339f558156eeab02812f3ddbe2ad52e0589248be23536b516a0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
