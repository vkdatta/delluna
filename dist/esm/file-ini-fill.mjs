export const name="file-ini-fill";
export const id="dl_92628173f15d471ebe9f";
export const url=new URL("../icons/file-ini-fill.svg?v=939adfadc7ae91e8b041c661339c50681b975f7f34c6686d033aa31c3672d8e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
