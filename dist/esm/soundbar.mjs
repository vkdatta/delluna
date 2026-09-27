export const name="soundbar";
export const id="dl_44012d893c5d669cc2e3";
export const url=new URL("../icons/soundbar.svg?v=ea358fa8a061ca90e22bb0a500cf1beb741fde875b11650c6a835dc4aa0891d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
