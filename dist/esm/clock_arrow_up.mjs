export const name="clock_arrow_up";
export const id="dl_170889c6254f6db27557";
export const url=new URL("../icons/clock_arrow_up.svg?v=a903bd6836ccb183f9c53c448cfc9cbd2430a9c8c3a898ee1910dcaeb04abfd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
