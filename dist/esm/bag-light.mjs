export const name="bag-light";
export const id="dl_c3d2505cf78d4efbbc52";
export const url=new URL("../icons/bag-light.svg?v=53de11afaf92d1111118519124c3ce1161b0bd151170a35b5fc0294bcb797101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
