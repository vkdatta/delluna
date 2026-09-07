export const name="align-bottom-light";
export const id="dl_cdca4a33522041d486cf";
export const url=new URL("../icons/align-bottom-light.svg?v=3fc1950ca939927cd26bbd6f88c4c3c3785599c6ed502204ec85346d1a69da73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
