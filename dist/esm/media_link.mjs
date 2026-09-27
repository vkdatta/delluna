export const name="media_link";
export const id="dl_2b636bf2a2992f74de48";
export const url=new URL("../icons/media_link.svg?v=ee288650bf111119bc97b11b6597bb8495f36351952a6d849b6ccfea762fff76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
