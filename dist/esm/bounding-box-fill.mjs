export const name="bounding-box-fill";
export const id="dl_28b87faf186d4812a97b";
export const url=new URL("../icons/bounding-box-fill.svg?v=d757f1567ff22c7cc6b4e0fe0789a98e8b5a73e3d65f118394ee5b9024217315",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
