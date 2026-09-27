export const name="arrows-out-line-horizontal-fill";
export const id="dl_96e16b51a16543ab9f65";
export const url=new URL("../icons/arrows-out-line-horizontal-fill.svg?v=160d7026c5086dca093bbe5399f0b539284f8b13f7451e152f35620b72b04d6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
