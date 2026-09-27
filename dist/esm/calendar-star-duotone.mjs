export const name="calendar-star-duotone";
export const id="dl_7e1d1cb5b5d4443e8bc2";
export const url=new URL("../icons/calendar-star-duotone.svg?v=265b36becb9a5040372ea1fb30b27e8897f6832b47cb3bacb1de39844811e6e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
