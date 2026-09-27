export const name="add_strike";
export const id="dl_0ec9e9679edc6c864ab6";
export const url=new URL("../icons/add_strike.svg?v=a7cd17f68ffd1c662250eb474ffc7f3e67416412cca6a071ab3cbdb1d1ac273f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
