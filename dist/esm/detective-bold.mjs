export const name="detective-bold";
export const id="dl_3a83ec43bc3f44529803";
export const url=new URL("../icons/detective-bold.svg?v=0b97dce23f7021ba0eb3b873fc3bccab36dd834ba2bfa25cffafc295dcd2dc5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
