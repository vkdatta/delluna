export const name="playlist-duotone";
export const id="dl_05d5ee37d3cc4076b7fb";
export const url=new URL("../icons/playlist-duotone.svg?v=25bac01d865811ef9942ea46e8e4edf28b1ac8c774d657e81b65233bd16ae907",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
