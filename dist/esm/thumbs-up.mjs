export const name="thumbs-up";
export const id="dl_ade39af6cfc8468683e5";
export const url=new URL("../icons/thumbs-up.svg?v=f79907ef59c6d7bbe03c295f8103d7e7cf4a662ebae69591624f6b9fe2d8c7c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
