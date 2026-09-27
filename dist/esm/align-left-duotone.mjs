export const name="align-left-duotone";
export const id="dl_c74ebfb920804023b950";
export const url=new URL("../icons/align-left-duotone.svg?v=16b4b0d4903ba11d0d9112c537ea9f4237385411a86674753d5e33fb13a31d50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
