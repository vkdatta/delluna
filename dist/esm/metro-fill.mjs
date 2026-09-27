export const name="metro-fill";
export const id="dl_034d50f02efc47b1de60";
export const url=new URL("../icons/metro-fill.svg?v=6aae47b1ac7f6cab6b85bba7b31c4b1fb14d499d587c1d3f7115ee2f3a93fcdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
