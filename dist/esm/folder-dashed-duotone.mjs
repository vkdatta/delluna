export const name="folder-dashed-duotone";
export const id="dl_34d0cf8d093b44aba03f";
export const url=new URL("../icons/folder-dashed-duotone.svg?v=bb6f96fa94c33920bc7223b7a43f044d070422147fe62b355a4e1e7cf91ca385",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
