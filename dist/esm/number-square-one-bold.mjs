export const name="number-square-one-bold";
export const id="dl_84667c556b0c41b59a25";
export const url=new URL("../icons/number-square-one-bold.svg?v=e65c9c53f06d815111fcd401960505205a1a6937db5d245537fa502cd1495942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
