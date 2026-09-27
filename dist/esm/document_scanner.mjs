export const name="document_scanner";
export const id="dl_c805f9cf9420140f1821";
export const url=new URL("../icons/document_scanner.svg?v=ae9d7367b93270a70cf16fe81eb90b005f17e0a76b9c27b6e2217ad75ae667e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
