export const name="folder-open-bold";
export const id="dl_ac8fe4bb4e3648ecb62f";
export const url=new URL("../icons/folder-open-bold.svg?v=6d0654a340f185df631b77cca3396dd52c1e10beeee08d663d08ece77caa68ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
