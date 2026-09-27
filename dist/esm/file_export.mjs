export const name="file_export";
export const id="dl_119771a42d2a0440eaa9";
export const url=new URL("../icons/file_export.svg?v=7ef553f602788e4097a6f445be9b4e49fd724ec129937422a523987617e978be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
