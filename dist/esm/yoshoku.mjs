export const name="yoshoku";
export const id="dl_b63c502e205b417c8947";
export const url=new URL("../icons/Y/yoshoku.svg?v=22484241d5ace56182398b679f7973afd6674a55f78300166dcb1733c247d82a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
