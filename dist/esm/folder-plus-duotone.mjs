export const name="folder-plus-duotone";
export const id="dl_fd2042524b284af08c98";
export const url=new URL("../icons/folder-plus-duotone.svg?v=1b497570d1a467cefe524f047f652cee91d4aa8318862c164453bb592c99e037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
