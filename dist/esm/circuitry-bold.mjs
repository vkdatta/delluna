export const name="circuitry-bold";
export const id="dl_de577c3b3009452383b3";
export const url=new URL("../icons/circuitry-bold.svg?v=c7752f323ffd5a7857d78e121dd0372aed6bf2d1a2a91d6ccb28c1985d4959cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
