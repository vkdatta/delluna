export const name="key-duotone";
export const id="dl_9b6ab012e80a404fb423";
export const url=new URL("../icons/key-duotone.svg?v=665a2a5b5e4e08109df950cf2d4d5ed113387a52ef12d1439df8a3e2736865e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
