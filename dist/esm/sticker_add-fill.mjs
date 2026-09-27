export const name="sticker_add-fill";
export const id="dl_2f3666da7500ba36ed9d";
export const url=new URL("../icons/sticker_add-fill.svg?v=22538b104f180efec9b37503daa84f21c628bae1e09b58bd10bf07896c60a8f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
