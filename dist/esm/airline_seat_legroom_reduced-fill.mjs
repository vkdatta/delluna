export const name="airline_seat_legroom_reduced-fill";
export const id="dl_4708eed7e9ddb8a90ab7";
export const url=new URL("../icons/airline_seat_legroom_reduced-fill.svg?v=3ca8a7b2fd9bf6cab6145eba51af21467736765dcb9e91383760c203466becbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
