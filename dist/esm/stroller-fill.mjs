export const name="stroller-fill";
export const id="dl_7ac9b9b4654588b2e67c";
export const url=new URL("../icons/stroller-fill.svg?v=68f60c61c6981085d88a05b21622203e7d91db21bf564887990a89719b50e66f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
