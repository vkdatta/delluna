export const name="deck-fill";
export const id="dl_49894f41776b9a7be131";
export const url=new URL("../icons/deck-fill.svg?v=c5e69b0c5d4a787d7b5e0ca0811c109dcf340f9c0e70d0d39a87226d18584e56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
