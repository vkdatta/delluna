export const name="business_chip";
export const id="dl_6fa39b798c5c7daed7a1";
export const url=new URL("../icons/business_chip.svg?v=1e78066633ee09b5f340fd80611bab779f2798698c8047f53e81101ecc9897ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
