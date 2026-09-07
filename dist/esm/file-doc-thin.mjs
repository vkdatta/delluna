export const name="file-doc-thin";
export const id="dl_64ffbf4e7c1b42bebae7";
export const url=new URL("../icons/file-doc-thin.svg?v=5701b40276f9fa0e9e7f4f8fd5b505dbff29a54f93cea27850f9bf1abd11d5a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
