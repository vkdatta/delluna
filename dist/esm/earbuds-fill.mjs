export const name="earbuds-fill";
export const id="dl_342c544335be2babc245";
export const url=new URL("../icons/earbuds-fill.svg?v=db09a1ad9c5dc49e7a0473e309958ace7a8ac91af894a6a5996d4eabee47b5ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
