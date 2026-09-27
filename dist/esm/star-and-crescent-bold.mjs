export const name="star-and-crescent-bold";
export const id="dl_5e2542bd68dfa8373795";
export const url=new URL("../icons/star-and-crescent-bold.svg?v=2d7030dc70470e026522794b644727cf2e46d2fae87cfce6ec04a3ec9b11b27e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
