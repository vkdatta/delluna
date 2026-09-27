export const name="watch_button-fill";
export const id="dl_f52df317a1fb041baafb";
export const url=new URL("../icons/watch_button-fill.svg?v=cd6515d89ceeb8d4a587960f1b42e7800572f175a87cdb1713284866b601dd78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
