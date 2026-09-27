export const name="megaphone-simple-light";
export const id="dl_f709af99c4c4425aaf0d";
export const url=new URL("../icons/megaphone-simple-light.svg?v=6c72f22f62b9a9d1ea678a4666bbc9fee67e039045a956acee424f9a12185afe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
