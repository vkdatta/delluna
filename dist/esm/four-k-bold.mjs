export const name="four-k-bold";
export const id="dl_56b70b98749743458e05";
export const url=new URL("../icons/four-k-bold.svg?v=8111d71a2bc01b219e01d63b40013b5170c744555efb6335337a8f3f2f4f4f54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
