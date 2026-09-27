export const name="picture_as_pdf";
export const id="dl_b374ce9b6ceb68b650d2";
export const url=new URL("../icons/picture_as_pdf.svg?v=33508b8627e90df58bea0763303da86a2dc1f5e86a9512e508ea9889cde3c5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
