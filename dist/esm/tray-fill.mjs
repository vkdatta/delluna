export const name="tray-fill";
export const id="dl_280d82fee664bdd6814b";
export const url=new URL("../icons/tray-fill.svg?v=cc880532dce907b75aa86d3cbd509bb2a0fc44e533970b7830fe9c6505098054",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
