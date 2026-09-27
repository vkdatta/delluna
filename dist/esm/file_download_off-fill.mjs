export const name="file_download_off-fill";
export const id="dl_e15c5cf980d5507f908d";
export const url=new URL("../icons/file_download_off-fill.svg?v=28041fd895170b0ce9499ca42495cd52639fb41d4211f4b1b0cd240b828d52b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
