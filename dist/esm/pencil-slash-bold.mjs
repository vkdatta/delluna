export const name="pencil-slash-bold";
export const id="dl_b59773474fe6499780b9";
export const url=new URL("../icons/pencil-slash-bold.svg?v=e368451a8b42f9f49cb401b4f485a630eb3aad4ce7e0deb922cd3ef80407a871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
