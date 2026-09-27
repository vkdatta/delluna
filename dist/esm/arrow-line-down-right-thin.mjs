export const name="arrow-line-down-right-thin";
export const id="dl_adc1a57d2ca348029391";
export const url=new URL("../icons/arrow-line-down-right-thin.svg?v=214da6ba9cc113c9c00bea6d14e33a8ff3a1f3bfc7d39ad96cefc0ed660c250f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
