export const name="snippet_folder";
export const id="dl_c006c9222e5ca9227f40";
export const url=new URL("../icons/snippet_folder.svg?v=6d44058ee2d8b84f714e37b6cd6208e4d1213e49c07276674e3f498cf842fbc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
