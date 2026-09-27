export const name="universal_local";
export const id="dl_6b25f9596293fc714ce2";
export const url=new URL("../icons/universal_local.svg?v=5c5529771c0ec7f6d0a2425c5372c818a7e79e41aeb80f8a4f40656f5d0ae413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
