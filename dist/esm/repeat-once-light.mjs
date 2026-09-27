export const name="repeat-once-light";
export const id="dl_0c824a84638c4d11b0ab";
export const url=new URL("../icons/repeat-once-light.svg?v=a4f1091e0b4ddf3cc0f13c6eddc06e110de94c724610d544c5803fe36bee790d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
