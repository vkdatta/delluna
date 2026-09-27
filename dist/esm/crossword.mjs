export const name="crossword";
export const id="dl_4c90071b89bf288a98b4";
export const url=new URL("../icons/crossword.svg?v=796cbe20a494848fda896f5451251e4c6d2cf980cb4d4cf7ca68b5bbc0ef3718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
