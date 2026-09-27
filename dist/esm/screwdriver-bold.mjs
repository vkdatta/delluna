export const name="screwdriver-bold";
export const id="dl_20a7466ed5440d4846c1";
export const url=new URL("../icons/screwdriver-bold.svg?v=94dd532806f23d6c50409f457a7fbfafcc61b745972b09eae3433666c4cbaf53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
