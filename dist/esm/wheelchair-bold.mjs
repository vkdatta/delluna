export const name="wheelchair-bold";
export const id="dl_51333a460ee17d9c3d30";
export const url=new URL("../icons/wheelchair-bold.svg?v=56eb7aee27488f23141efe2ed60836cbaea9d3365ad9c2de822114ac02ce3ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
