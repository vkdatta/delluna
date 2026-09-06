export const name="arrow-bend-left-down-duotone";
export const id="dl_2f5e7bf4566442fcb794";
export const url=new URL("../icons/arrow-bend-left-down-duotone.svg?v=727bd653670ad2b70d47386ef28aebfc949953a2b5bea6a46d6d3bfa65511d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
