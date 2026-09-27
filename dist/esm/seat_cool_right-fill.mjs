export const name="seat_cool_right-fill";
export const id="dl_a352183d10b7a73ced2f";
export const url=new URL("../icons/seat_cool_right-fill.svg?v=151b0cde6f7712ec0734f92a14864b41dfa0c71235168d910bd300460a4c7461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
