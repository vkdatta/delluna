export const name="picture_as_pdf";
export const id="dl_8ca699b086e57cf6466e";
export const url=new URL("../icons/picture_as_pdf.svg?v=80ea87923dace9089e66156debcf2eee749ec60dc589d0c9b60194c9e0ce3a9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
