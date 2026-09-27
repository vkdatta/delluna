export const name="files-bold";
export const id="dl_f544ea2bb2c2406d808a";
export const url=new URL("../icons/files-bold.svg?v=6c36658170a318bdd8e0918924e3b85fb4cb6065fae81730e961f228311fa1d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
