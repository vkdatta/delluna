export const name="farm-thin";
export const id="dl_20167713f54f490d8cc9";
export const url=new URL("../icons/farm-thin.svg?v=a13d794f24e95fc95ed919293bcf85bc80ce757a1d17edac3a25e759d7553cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
