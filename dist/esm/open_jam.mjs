export const name="open_jam";
export const id="dl_998d31134ac65b14d8cf";
export const url=new URL("../icons/open_jam.svg?v=7fc418dde8e57a5b813795855ca2cf0c81c0d4eccb1acd315d5ff6f88579e7a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
