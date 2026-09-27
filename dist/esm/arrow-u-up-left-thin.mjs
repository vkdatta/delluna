export const name="arrow-u-up-left-thin";
export const id="dl_60f871b0ab7f40ceadfe";
export const url=new URL("../icons/arrow-u-up-left-thin.svg?v=0b9ca048e71754568dee4574198af7ff036db30c3970015766597e0357efbcb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
