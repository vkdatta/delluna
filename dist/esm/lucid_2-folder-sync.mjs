export const name="lucid_2-folder-sync";
export const id="dl_9cefcf8d401b4731a43f";
export const url=new URL("../icons/lucid_2-folder-sync.svg?v=eb5afc9d1138e271017117515bff29a87a754792cfc7ef1bfe58dde7339b5acf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
