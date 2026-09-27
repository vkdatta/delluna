export const name="lucid_2-face-grinning";
export const id="dl_d8ca2443b3f44ca69881";
export const url=new URL("../icons/lucid_2-face-grinning.svg?v=101d577b50ef169a6cf23f0dbcdff8bb555aaba6d9f222a4c9ecb58fa5f165f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
