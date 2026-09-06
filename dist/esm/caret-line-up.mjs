export const name="caret-line-up";
export const id="dl_8db12e20069b4124b7cb";
export const url=new URL("../icons/caret-line-up.svg?v=0d226bf67a0bd797cd4b9491870870ae2126762b5ee90be4cd7c01d6a5d2ee24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
