export const name="folder_zip";
export const id="dl_f569f49eb12089d81003";
export const url=new URL("../icons/folder_zip.svg?v=5b5029b226cd638aa8cd51c1816d7951c90eb880d356dd8c571289fefa33b11a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
