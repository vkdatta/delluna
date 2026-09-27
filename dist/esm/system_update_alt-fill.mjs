export const name="system_update_alt-fill";
export const id="dl_3f5e66c714fa86c3f79a";
export const url=new URL("../icons/system_update_alt-fill.svg?v=252e396c9dbd676511297faca79354b0799123d5bcc239f6526d9b76c2e9ad0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
