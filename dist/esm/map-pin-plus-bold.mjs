export const name="map-pin-plus-bold";
export const id="dl_a871274480ea49b9b24a";
export const url=new URL("../icons/map-pin-plus-bold.svg?v=f20fb0b988707a1a301bfc0ee80a817d5087473cadb6f6c746c74e8908217d05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
