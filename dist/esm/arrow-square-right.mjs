export const name="arrow-square-right";
export const id="dl_eccfbdf845ac4b30a5e1";
export const url=new URL("../icons/arrow-square-right.svg?v=95d855077d1180ee7dbc53828173d3c6a8fba0e15f71f27a84413316d2404f5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
