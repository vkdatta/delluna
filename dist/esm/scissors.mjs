export const name="scissors";
export const id="dl_ccae10b4615c44bd3a17";
export const url=new URL("../icons/scissors.svg?v=db25d94e299af9ca93efc9fbb7bf3c1b201d019223c2d81bcd1a6b8aa2b39991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
