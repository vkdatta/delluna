export const name="selection-thin";
export const id="dl_580543c43adcf8bfe2d2";
export const url=new URL("../icons/selection-thin.svg?v=e06cec10b45ce11dc5425022908d466c1ce7b1912f1a756b375c2f87b9231cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
