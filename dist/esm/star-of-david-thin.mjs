export const name="star-of-david-thin";
export const id="dl_e14cf8bfd8671bb88bca";
export const url=new URL("../icons/star-of-david-thin.svg?v=aa4369bffd85f799885c5288cfabf62d1c4e04e6f663d5c8fbee95a861edee32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
