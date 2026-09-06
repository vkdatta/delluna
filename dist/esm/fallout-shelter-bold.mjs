export const name="fallout-shelter-bold";
export const id="dl_7061414af4024fdcb310";
export const url=new URL("../icons/fallout-shelter-bold.svg?v=1145fd058e02afc6cdd7311903ca1d7e161434ea006cc3f023fad3e00b4facd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
