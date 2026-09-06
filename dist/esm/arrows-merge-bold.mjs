export const name="arrows-merge-bold";
export const id="dl_28733bf0665947c2a005";
export const url=new URL("../icons/arrows-merge-bold.svg?v=495128d2d9fa923a4b9633b92c97cf43de503142bebaa9057bf9d46109b3543c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
