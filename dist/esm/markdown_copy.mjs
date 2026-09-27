export const name="markdown_copy";
export const id="dl_408ded13b3bb1411c4be";
export const url=new URL("../icons/markdown_copy.svg?v=4de8fda111bca0251cdc2b4d36933f4f4decd8804f34032570f188987dbb2535",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
