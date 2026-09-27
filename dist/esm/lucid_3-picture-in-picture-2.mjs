export const name="lucid_3-picture-in-picture-2";
export const id="dl_c42f177b32e24ba889c7";
export const url=new URL("../icons/lucid_3-picture-in-picture-2.svg?v=d8a8a4ef40cebe1ae9eaf6981a3fbd8895ac412d2f2321d55654825bc50ef3e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
