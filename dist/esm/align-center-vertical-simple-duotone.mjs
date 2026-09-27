export const name="align-center-vertical-simple-duotone";
export const id="dl_c4f090d52e69405eb1a0";
export const url=new URL("../icons/align-center-vertical-simple-duotone.svg?v=93919d3d2cb8977bbc5f4b9a293cf8154caa0ca303507da5831054222e1cdadb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
