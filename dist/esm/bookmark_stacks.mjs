export const name="bookmark_stacks";
export const id="dl_6d2ba7c9be2c423b8f16";
export const url=new URL("../icons/B/bookmark_stacks.svg?v=ac58e772fa90a97b78cff84a7b1aadc26b1cf5a5d10dab58ab1650e635842269",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
