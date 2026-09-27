export const name="bounding-box";
export const id="dl_3907ed2dbaf24eb788bb";
export const url=new URL("../icons/bounding-box.svg?v=2639c29863187fba9ed5eca18930a9adcc2404485941888d71fdda4db2094398",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
