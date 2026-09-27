export const name="fallout-shelter-bold";
export const id="dl_7061414af4024fdcb310";
export const url=new URL("../icons/fallout-shelter-bold.svg?v=37d4cf36a77f09d5c1531a110d9603ccc90628a09d28978e43517bd67f7ce0be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
