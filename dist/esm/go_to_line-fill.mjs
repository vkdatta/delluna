export const name="go_to_line-fill";
export const id="dl_52121f015fe4325eebf9";
export const url=new URL("../icons/go_to_line-fill.svg?v=3f416b56b7cfc95ee5a02c7b9aa842bad67d82c87a9c04e38efee756c4c89c9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
