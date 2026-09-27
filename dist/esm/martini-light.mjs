export const name="martini-light";
export const id="dl_989b8e2df569494ba985";
export const url=new URL("../icons/martini-light.svg?v=8f5de2826991a83c6b3a4aa9bbc378c8684718b78b412758483046a10c328742",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
