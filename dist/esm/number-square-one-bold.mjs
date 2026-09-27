export const name="number-square-one-bold";
export const id="dl_84667c556b0c41b59a25";
export const url=new URL("../icons/number-square-one-bold.svg?v=2a0695bcd651adcb8a0b4d271e16da49289fb368430756131e9e5586906339d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
