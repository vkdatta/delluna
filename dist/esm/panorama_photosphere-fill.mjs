export const name="panorama_photosphere-fill";
export const id="dl_05945cf94f13889b80c1";
export const url=new URL("../icons/panorama_photosphere-fill.svg?v=13aee38a71ee2c5ed999fa6308c4a836917bb3a63d2c99517725a3d84aff019e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
