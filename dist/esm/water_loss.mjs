export const name="water_loss";
export const id="dl_76a525fc72b241dfbd0b";
export const url=new URL("../icons/water_loss.svg?v=d456c8c366560689db7cda423788b846d9e47bfe9d71946eba9b4f8be067ce1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
