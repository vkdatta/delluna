export const name="image_search";
export const id="dl_c48a98c054ab47f1b214";
export const url=new URL("../icons/image_search.svg?v=b040f6d0077b8f521f9dfb95200be4947a944e1d7dd191e86b6aab72bd07a551",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
