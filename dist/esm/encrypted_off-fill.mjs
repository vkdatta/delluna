export const name="encrypted_off-fill";
export const id="dl_aac609ab563c4e57ae88";
export const url=new URL("../icons/encrypted_off-fill.svg?v=fec7e337181826c08124e59c097f73de6cc4925c610899c7f5e42d3cc7da8585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
