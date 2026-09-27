export const name="lucid_3-non-binary";
export const id="dl_23350ddb45c14382b4e6";
export const url=new URL("../icons/lucid_3-non-binary.svg?v=d4460447680451bd1092c66a7092a91b90790de8c1672307172ad7ca9e27c05e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
