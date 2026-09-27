export const name="text-h-five-bold";
export const id="dl_bdf6047703f3c37ab269";
export const url=new URL("../icons/text-h-five-bold.svg?v=4d2c9ca107eb77080686c02c8a823941618ba07268e0c99f2306933a958bf02d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
