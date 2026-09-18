export const name="stock_media-fill";
export const id="dl_41ae50ade4114fd0ae81";
export const url=new URL("../icons/S/stock_media-fill.svg?v=b97b28c9c00072f3f2e47344950c3368b25db87548b9e21e8e4caf6b751e919d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
