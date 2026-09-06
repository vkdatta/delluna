export const name="barcode-light";
export const id="dl_74e870c45500403c9a66";
export const url=new URL("../icons/barcode-light.svg?v=fef80b202a19ef56ffaa7ecf3b299c6d24452bed5805daf362197202e6022afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
