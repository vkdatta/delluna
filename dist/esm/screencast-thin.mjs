export const name="screencast-thin";
export const id="dl_ac26d9dcfc514eb6aa03";
export const url=new URL("../icons/S/screencast-thin.svg?v=9a7ebc5a5cae2e9f705f2bd51a85db2d20c222aaa6ce16807e4d5830095d447a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
