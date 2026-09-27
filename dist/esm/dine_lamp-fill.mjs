export const name="dine_lamp-fill";
export const id="dl_ad63b26edce2e51758dd";
export const url=new URL("../icons/dine_lamp-fill.svg?v=434d90dd18545041093abfadc9b5b1e4af11cbc8c6a9a946b842f80e3fb2fbfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
