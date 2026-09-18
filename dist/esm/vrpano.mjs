export const name="vrpano";
export const id="dl_753726a34e9e4422a12a";
export const url=new URL("../icons/vrpano.svg?v=5230fb572af30022bd6175ffb8a6b8560a91a024cc09f1c858dc02b38a98fcf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
