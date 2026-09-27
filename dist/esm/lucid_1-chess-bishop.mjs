export const name="lucid_1-chess-bishop";
export const id="dl_6804b40db5c94f5bb8fd";
export const url=new URL("../icons/lucid_1-chess-bishop.svg?v=1d225afe704f4042dd897b46d457acdf15a76f36a523f6159b96034766c686b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
