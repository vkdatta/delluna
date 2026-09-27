export const name="2d-fill";
export const id="dl_c8a4307a3eb53f22c655";
export const url=new URL("../icons/2d-fill.svg?v=6ffe7d956c556d2aca7e45f0aebf7bcd9be3e4580d22fb7b1fc190ff9e50bf7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
