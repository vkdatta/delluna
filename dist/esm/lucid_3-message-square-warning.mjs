export const name="lucid_3-message-square-warning";
export const id="dl_1eb59017d35742289f77";
export const url=new URL("../icons/lucid_3-message-square-warning.svg?v=724f4a151bc5d5ec4e03ce6f5cec1a4304b95c183c9b227d2d44c5f06596462a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
