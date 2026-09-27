export const name="visor-bold";
export const id="dl_42854f40168d0140da88";
export const url=new URL("../icons/visor-bold.svg?v=e6e5fa195e17e661fbdacd849dd29a05358c820dab7a6d7a06ab2dc69850ffee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
