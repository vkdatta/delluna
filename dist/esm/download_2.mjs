export const name="download_2";
export const id="dl_2bff36b648881c964400";
export const url=new URL("../icons/download_2.svg?v=6eb9a61fe996d1f385dd2461c664f0cb9dbd64bfa0a5798f12c161b83fa9b4db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
