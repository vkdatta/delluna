export const name="arrow-circle-down-left-bold";
export const id="dl_fa2a59a771014d558556";
export const url=new URL("../icons/arrow-circle-down-left-bold.svg?v=9a3af3f3a5f274cf681de7fb76619980ac389ae698645d6fe753a4ef92064dc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
