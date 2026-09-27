export const name="bug-beetle-light";
export const id="dl_9c5bae34cd02421e82bb";
export const url=new URL("../icons/bug-beetle-light.svg?v=b0763aaa5e3f86f8f3f0cd743bf35c35eb64177f391582c50fbd3de47c0d8da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
