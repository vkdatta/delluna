export const name="sanitizer-fill";
export const id="dl_7168bf3333b64c6eab51";
export const url=new URL("../icons/sanitizer-fill.svg?v=5774aea1182e5f26112e2e9b3289f54e3b5a3e3bd83c849e5715c18eb42f1ae2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
