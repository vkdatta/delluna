export const name="arrow_outward-fill";
export const id="dl_53d0a8a5f7664713a1a5";
export const url=new URL("../icons/arrow_outward-fill.svg?v=b1926d66cc877b6ef50b0e6737ffe6acce0fe28c834bb27df1b802f12b8299ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
