export const name="arrow-line-left-thin";
export const id="dl_f5a129accba243c69bfe";
export const url=new URL("../icons/arrow-line-left-thin.svg?v=61b02df31666dea6f894e205d382d6c5b977206380d7303884f1c7dd5fca3dad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
