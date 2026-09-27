export const name="lan-fill";
export const id="dl_78fe658446fc04a1783a";
export const url=new URL("../icons/lan-fill.svg?v=2e75774de6d6a92578418cdbf04dd8129bc6aa331f1fa131da27d607fbbafa5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
