export const name="file-js";
export const id="dl_a309dffd349f4335912a";
export const url=new URL("../icons/file-js.svg?v=e467c8e1836d5000439bc0c0202e32cff787c11a9ae7eefedd902717d4845425",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
