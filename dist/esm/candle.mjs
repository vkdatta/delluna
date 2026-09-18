export const name="candle";
export const id="dl_c3cf73bf4b604403b12f";
export const url=new URL("../icons/candle.svg?v=232a663aaaf5cf6e59b86203cc1fddc57047b43d50d85d85f7269511111e258b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
