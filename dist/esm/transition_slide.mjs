export const name="transition_slide";
export const id="dl_155fe2afbcdcf6bebeda";
export const url=new URL("../icons/transition_slide.svg?v=f4b57ac4e490454adcc39cf6ada4d59ff085e60b99cf1f9bb80602f386817367",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
