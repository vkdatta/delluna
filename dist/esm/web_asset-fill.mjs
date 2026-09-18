export const name="web_asset-fill";
export const id="dl_da809ad27cdd4cf69dc2";
export const url=new URL("../icons/web_asset-fill.svg?v=b040c2d1142197eefd02a54d22df74bd8278b4ea8bec070777cd27a6bbcd8b3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
