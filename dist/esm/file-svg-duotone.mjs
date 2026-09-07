export const name="file-svg-duotone";
export const id="dl_9cdc51a319ec4a85a032";
export const url=new URL("../icons/file-svg-duotone.svg?v=86aa47ae3937d574de69ca03e7f1edaec850e300b4935579750a8d4f2ac8825f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
