export const name="puzzle-piece-duotone";
export const id="dl_8734f6033d61462996c9";
export const url=new URL("../icons/puzzle-piece-duotone.svg?v=abcea34a88101f4b679c29fcf30e57a73c3239396f20873f17e03a8c272bf0dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
