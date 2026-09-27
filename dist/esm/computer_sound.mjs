export const name="computer_sound";
export const id="dl_439d71739f4e82fe6c1a";
export const url=new URL("../icons/computer_sound.svg?v=cbefd0df96880d086f726e2519b210fb73b4804046188580c864f29ac35ae76f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
