export const name="coda-logo";
export const id="dl_72094a64e1fe454386cf";
export const url=new URL("../icons/coda-logo.svg?v=f2c578a50ca80906eb69522294655f1dc9a452ab885e114b52b549bb86efec42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
