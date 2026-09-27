export const name="attach_file-fill";
export const id="dl_302e41b6bd5296e19e4b";
export const url=new URL("../icons/attach_file-fill.svg?v=9cadb1b26b17e5720f9079a6283bba123d7d4bb60ce410453c3e82f99fd2bd41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
