export const name="lucid_3-signpost-big";
export const id="dl_c2ecc450dd9d46b4a1a1";
export const url=new URL("../icons/lucid_3-signpost-big.svg?v=89504aed49b4ae0119007d404b44944e90337989268e6ef7a25ef60a1af93a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
