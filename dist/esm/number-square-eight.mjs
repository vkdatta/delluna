export const name="number-square-eight";
export const id="dl_429ba5372102433199c1";
export const url=new URL("../icons/number-square-eight.svg?v=c72b50472ba9cfe56fca86c6045924cebd25bc78c2f237396213a282d0fda288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
