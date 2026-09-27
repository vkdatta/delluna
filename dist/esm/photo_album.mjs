export const name="photo_album";
export const id="dl_7f69735df106eb5de22b";
export const url=new URL("../icons/photo_album.svg?v=aaa3b07011595e556630ea02b96b51e7b7df72b63745a7cc3b454aac4a6a40aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
