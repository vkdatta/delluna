export const name="headphones-light";
export const id="dl_413e7b8ffeed43c88dc6";
export const url=new URL("../icons/headphones-light.svg?v=715e14d13b80426bbb719df354cb5d6a15f359e9eaab99baf8078f0491e201b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
