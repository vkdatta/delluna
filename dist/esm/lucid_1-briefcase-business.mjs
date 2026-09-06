export const name="lucid_1-briefcase-business";
export const id="dl_a67c8090dd664d3aaf9a";
export const url=new URL("../icons/lucid_1-briefcase-business.svg?v=27450563b1fd3f0218ebd177251b0348fe0ff449775c1e1bbde3ac7b802a0dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
