export const name="shop";
export const id="dl_810d901776b3f654ff0b";
export const url=new URL("../icons/shop.svg?v=5ee091ccde4e315c33ebd2d7eeafddaff9fa848a99d3510207ec4e4536c3f851",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
