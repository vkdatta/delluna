export const name="needle-fill";
export const id="dl_71b76d6aa07049e6bc89";
export const url=new URL("../icons/needle-fill.svg?v=08b787b5b1d37bde3a50b21322585c12ac42874a0b5c3ce3bb1a351590aaa90e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
