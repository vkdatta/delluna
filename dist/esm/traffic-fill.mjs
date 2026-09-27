export const name="traffic-fill";
export const id="dl_fa9dc0266c996fb1e847";
export const url=new URL("../icons/traffic-fill.svg?v=8e5409c8b057d4211f4ade11cad1003689d087099be8ab87a35c1d2cafef2c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
