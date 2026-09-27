export const name="arrows-in-simple-bold";
export const id="dl_64b27238e89740b9bb70";
export const url=new URL("../icons/arrows-in-simple-bold.svg?v=8089b3894fc573a3dedfcbbc19c49e9cc272e9421be5ac85b4de009dc1094d16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
