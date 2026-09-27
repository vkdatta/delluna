export const name="text-h-one-bold";
export const id="dl_3e17ddad666b11ce009a";
export const url=new URL("../icons/text-h-one-bold.svg?v=0b3eebfdfae53e0c9bdf08ee612744a01d56ccb3cbd1b334cd7ac160ee1534ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
