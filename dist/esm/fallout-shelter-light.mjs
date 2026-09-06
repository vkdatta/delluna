export const name="fallout-shelter-light";
export const id="dl_017885277e314e56b859";
export const url=new URL("../icons/fallout-shelter-light.svg?v=da2655f7bcf4f4291ef7a56a446baf8b926fc614dcf4834f60b75d9da0e15c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
