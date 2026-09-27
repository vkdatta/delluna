export const name="lucid_1-clipboard-copy";
export const id="dl_355154f1f66f49a09797";
export const url=new URL("../icons/lucid_1-clipboard-copy.svg?v=945688e69d8cc81852a03f56db20a391e30f8485fb82c05f5806a01dd26f231b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
