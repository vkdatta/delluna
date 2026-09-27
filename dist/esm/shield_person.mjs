export const name="shield_person";
export const id="dl_8736cd1565a039fcea69";
export const url=new URL("../icons/shield_person.svg?v=97c14c9a6cd6dcb100452adb84a7ff8ad7e31a6dd39da5d288a8c1e7b54f26d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
