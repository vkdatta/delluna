export const name="slide_library";
export const id="dl_5308570da1ab72988a66";
export const url=new URL("../icons/slide_library.svg?v=35614999070dcd9e7904867173f2cd39c0bc92d386d7c7a348a24ec99683c001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
