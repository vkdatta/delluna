export const name="phone_locked-fill";
export const id="dl_a48ae76e9c6fac1362ae";
export const url=new URL("../icons/phone_locked-fill.svg?v=63fcd39677c759dffbc312a6f0bd9ab3c87c5105842e503e9535be6fcf952c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
