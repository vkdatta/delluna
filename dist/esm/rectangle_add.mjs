export const name="rectangle_add";
export const id="dl_8f031d6e2be4089994db";
export const url=new URL("../icons/rectangle_add.svg?v=cfa26090e2acd545382c6e01552f9f2490ea5afa02fb62809e4f07dd44a11975",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
