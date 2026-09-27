export const name="lucid_2-folder-sync";
export const id="dl_9cefcf8d401b4731a43f";
export const url=new URL("../icons/lucid_2-folder-sync.svg?v=8edb3e8ff9f8bcbc450d07a37a3ad1935412cf235ff8bfbe021dd25940ef1d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
