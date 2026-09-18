export const name="document_scanner";
export const id="dl_bd69f28695a0960b8c99";
export const url=new URL("../icons/document_scanner.svg?v=06d1c658d2c34e54c45af63b3427784fedf2ecfcade5f015838c8d3dee3d3291",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
