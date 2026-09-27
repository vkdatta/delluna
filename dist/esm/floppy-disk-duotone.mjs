export const name="floppy-disk-duotone";
export const id="dl_af13cb0211b4481594bd";
export const url=new URL("../icons/floppy-disk-duotone.svg?v=de6db562655b8974fce79df1ee167dd136230c67079561a1328644ee6b85e3fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
