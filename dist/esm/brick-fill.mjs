export const name="brick-fill";
export const id="dl_d96013fbb2b985c7db40";
export const url=new URL("../icons/brick-fill.svg?v=c65b4e521049d140d8516d32fd974bef4d80124abfff09ebb817f4363c1f0202",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
