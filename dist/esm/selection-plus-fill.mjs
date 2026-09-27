export const name="selection-plus-fill";
export const id="dl_b234aa460990365769dd";
export const url=new URL("../icons/selection-plus-fill.svg?v=a3c474da370c71accbef9ec0abaf1f92799962441e7ae744806717fa7c601f20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
