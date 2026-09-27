export const name="tune";
export const id="dl_163a91981ed8ea261072";
export const url=new URL("../icons/tune.svg?v=cdc21645c05e26750e3d953707f453ee2e4580fefd934ed0c66725e610196e1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
