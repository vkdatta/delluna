export const name="event";
export const id="dl_2ed9abfac1c9782d498a";
export const url=new URL("../icons/event.svg?v=855c3ea492642174c0c06a52b87c4092a01fec5d7b9a8bc5d41709ac8bc01125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
