export const name="mobile_arrow_down";
export const id="dl_66f43585aa344749aab5";
export const url=new URL("../icons/M/mobile_arrow_down.svg?v=9e7bad6d9c82f67d6d2ad6d3c1c85c25139bb24d8a1a28f5670a83c6c096c324",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
