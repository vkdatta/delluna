export const name="file-html";
export const id="dl_d8a8669c6f444aaaa6be";
export const url=new URL("../icons/file-html.svg?v=510dc8aa9876a827e48aea222b5347bde306b74c560abc6e1b4b8b7d976289ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
