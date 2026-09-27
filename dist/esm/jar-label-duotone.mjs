export const name="jar-label-duotone";
export const id="dl_39f46284ced64416badb";
export const url=new URL("../icons/jar-label-duotone.svg?v=38ae1c79d81ee38823a92a45f8a617a5682af7d6907670ce029626ab98be22ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
