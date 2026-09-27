export const name="binary";
export const id="dl_2a26b7755a9043278eb0";
export const url=new URL("../icons/binary.svg?v=e335fc50d955a7b3fa32f2daba5a9659d758dc80d476abc76015ac42eb5b79c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
