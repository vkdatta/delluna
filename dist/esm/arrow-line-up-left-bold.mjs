export const name="arrow-line-up-left-bold";
export const id="dl_a2d80c24c0484509853d";
export const url=new URL("../icons/arrow-line-up-left-bold.svg?v=cb6a54ca9a45912eb09ca520a7b23eff08551a854a6c5e6f1fa1ab69ead3871b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
