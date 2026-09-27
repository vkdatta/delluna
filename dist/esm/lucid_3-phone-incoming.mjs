export const name="lucid_3-phone-incoming";
export const id="dl_5c076400a4164babaf5e";
export const url=new URL("../icons/lucid_3-phone-incoming.svg?v=0e2b4d7ce39c8148b7030f96832c4ec57bbed733684dc430caa19494395b41b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
