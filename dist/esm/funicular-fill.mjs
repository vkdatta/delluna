export const name="funicular-fill";
export const id="dl_9e5813a85f5712baeb22";
export const url=new URL("../icons/funicular-fill.svg?v=098637084752feccd7bc7c0a572f6faa32a6e7a55066b0045ee32fe46893e5cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
