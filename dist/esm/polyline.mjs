export const name="polyline";
export const id="dl_b0cf229ec7e44cad9562";
export const url=new URL("../icons/P/polyline.svg?v=93c4db63071cc9e017216712001cac2f14fa53e0de49c08e4f59d5ceb8126200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
