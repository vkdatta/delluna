export const name="arrow-fat-lines-down-thin";
export const id="dl_dee93bbf77d34218bc1f";
export const url=new URL("../icons/arrow-fat-lines-down-thin.svg?v=98a52a3cf125211c65b1f5abd2543382524971ecc71783c04555cfe31e2349f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
