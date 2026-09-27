export const name="lucid_2-hand-heart";
export const id="dl_311e22ce355848f48e98";
export const url=new URL("../icons/lucid_2-hand-heart.svg?v=e3ce77a68dfa794756c3d3341e70d34bbf8dbd5584cb0d71e53b57772a14b874",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
