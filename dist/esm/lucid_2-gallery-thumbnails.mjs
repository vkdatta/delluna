export const name="lucid_2-gallery-thumbnails";
export const id="dl_944f53105f5c43f1b5df";
export const url=new URL("../icons/lucid_2-gallery-thumbnails.svg?v=7cb5ce0a8c1c89ebf45a11067b4339adae8b02622d28fe94f82a2e2eb2c07215",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
