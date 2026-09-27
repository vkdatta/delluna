export const name="smiley-blank";
export const id="dl_bb4b80bed074beb59bda";
export const url=new URL("../icons/smiley-blank.svg?v=9b5a86da8bc2fda82c8fe847c45ef9b4c413188548957050b46f7fd901e05051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
