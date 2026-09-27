export const name="calendar-blank-thin";
export const id="dl_cbdd115466ca423d89a3";
export const url=new URL("../icons/calendar-blank-thin.svg?v=cd872940b3c4dc320a4d903ec555c1e8c90fae48dd54a0065ec80edb0f86ce53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
