export const name="arrow-bend-left-up-light";
export const id="dl_038736d63dfb4d148b61";
export const url=new URL("../icons/arrow-bend-left-up-light.svg?v=1adb2d21326b28b0c9778f03c460a04333fc813d6c06ea5b3eb63e468978b5f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
