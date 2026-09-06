export const name="zodiac-capricorn";
export const id="dl_4315389c79e44f598360";
export const url=new URL("../icons/zodiac-capricorn.svg?v=650b599706c7160fce583a25738f2d5c7e582656cbda3b68482a6a551e2dd497",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
