export const name="court-basketball-duotone";
export const id="dl_2433a3742eea45c79d16";
export const url=new URL("../icons/court-basketball-duotone.svg?v=36f1df69bbf165780f9d6d7fe589fcf77222c3ac13bb15403c138bbca5a139c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
