export const name="smiley-nervous-duotone";
export const id="dl_a42dad57afe37d1df176";
export const url=new URL("../icons/smiley-nervous-duotone.svg?v=07eb6c2c928080098a2e922ea16a2d49ded3dd09315fa56c77488e23bef44f04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
