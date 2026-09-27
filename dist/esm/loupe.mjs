export const name="loupe";
export const id="dl_cc73f88f7a3c9b751989";
export const url=new URL("../icons/loupe.svg?v=af6f922017027ed5598386110984feef551795224fdee7d4ca8f557cc2f34c53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
