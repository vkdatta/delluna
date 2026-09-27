export const name="lucid_2-folder-sync";
export const id="dl_9cefcf8d401b4731a43f";
export const url=new URL("../icons/lucid_2-folder-sync.svg?v=2b535eca5479fdd3639ad86e52f5251b80da983b895b5c93fd81574d687d7fee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
