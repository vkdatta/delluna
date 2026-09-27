export const name="lucid_2-forklift";
export const id="dl_0dbfddad55aa470ab3a1";
export const url=new URL("../icons/lucid_2-forklift.svg?v=88217a694d9498864c34790cc561fb79bda04bee128588c10ff40161873ffe85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
