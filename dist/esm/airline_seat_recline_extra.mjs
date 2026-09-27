export const name="airline_seat_recline_extra";
export const id="dl_b53fab037b3791e7cff3";
export const url=new URL("../icons/airline_seat_recline_extra.svg?v=962821fbcbe0d91052c147be9e69a96b17d0733286b28833418c5957e6251b3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
