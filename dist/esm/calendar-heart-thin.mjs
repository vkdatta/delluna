export const name="calendar-heart-thin";
export const id="dl_01382916e7ec43ecab39";
export const url=new URL("../icons/calendar-heart-thin.svg?v=26a3c9b32ed3e59be858574757fe46a140c24bc903dc11ae8f6837267ed4773e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
