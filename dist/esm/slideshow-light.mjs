export const name="slideshow-light";
export const id="dl_b1dbe5763816408caddb";
export const url=new URL("../icons/S/slideshow-light.svg?v=85865ab18dec95612628a8adbbbc62d8d5a76085b4840a9f1004e8e0b3642a4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
