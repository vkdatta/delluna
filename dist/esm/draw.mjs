export const name="draw";
export const id="dl_8cdb937fa61bed24b6ce";
export const url=new URL("../icons/draw.svg?v=f945fef8ab1029a6e1876b2b01d02cc58dfeef4b36914b662de8a0bfdef23e32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
