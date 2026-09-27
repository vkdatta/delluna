export const name="selection-slash-fill";
export const id="dl_0c4941ed032a8ec1640e";
export const url=new URL("../icons/selection-slash-fill.svg?v=43e8b8fb4e44223d4c3524f600e49fb9aacc936b7ae6af29311b8b4654320152",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
