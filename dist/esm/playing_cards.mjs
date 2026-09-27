export const name="playing_cards";
export const id="dl_272d49ee59e9b7b1a7f5";
export const url=new URL("../icons/playing_cards.svg?v=97d70c2d4ba7a4e906dc6db669a03c889265039433b6cf32ba7ddf5008e91c44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
