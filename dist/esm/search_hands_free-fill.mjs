export const name="search_hands_free-fill";
export const id="dl_7eb1716888694f798010";
export const url=new URL("../icons/S/search_hands_free-fill.svg?v=b2edc9173034f98d447601e5f018118b572d43572257a3ad015449a69e86ff8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
