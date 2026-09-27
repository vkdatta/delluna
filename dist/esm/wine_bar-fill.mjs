export const name="wine_bar-fill";
export const id="dl_1d7fa353ccd247541d93";
export const url=new URL("../icons/wine_bar-fill.svg?v=36862298f741965d62f9da2d4756ab154ae181b5efdd5b9d3ac22bada289e0ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
