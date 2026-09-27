export const name="feedback";
export const id="dl_3bc3367781c3adb1fc52";
export const url=new URL("../icons/feedback.svg?v=558a7634383776729baca7655cf2bd8abfba5c080e36af59d2d800a3ba6aaf24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
