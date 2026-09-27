export const name="caret-circle-up-bold";
export const id="dl_1ff1cff2824949b19b2c";
export const url=new URL("../icons/caret-circle-up-bold.svg?v=42d73075e296bd178ed44650e2bc817d4de0188f29d055af569438f0b2811812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
