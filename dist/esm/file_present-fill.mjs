export const name="file_present-fill";
export const id="dl_602c323a71a3024b106f";
export const url=new URL("../icons/file_present-fill.svg?v=644c2da576ad747702cfa8ed01904b06a98ae652801c49fac8a85ebbba752c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
