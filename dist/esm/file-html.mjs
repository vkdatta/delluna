export const name="file-html";
export const id="dl_d8a8669c6f444aaaa6be";
export const url=new URL("../icons/file-html.svg?v=e4a0f77cdaf81e478a404090db93f759423e4f707bcecc895a3ed09e8681dc09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
