export const name="hand-eye-bold";
export const id="dl_40dc456dc16c45de826b";
export const url=new URL("../icons/hand-eye-bold.svg?v=102f3e5561bcdbafac1ee5da5ae7c81163908bf30a551a91888f29212f884405",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
