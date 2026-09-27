export const name="radio-duotone";
export const id="dl_907b439f09134120993a";
export const url=new URL("../icons/radio-duotone.svg?v=52bf58c2c4e0220290ca69814e9cab4feb46c396f26f68feb4a0dff8b6e7daa1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
