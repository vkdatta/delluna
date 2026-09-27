export const name="caret-circle-left-light";
export const id="dl_6cf4e77ae7044030b7e5";
export const url=new URL("../icons/caret-circle-left-light.svg?v=c9ec0cd858c95bcd12faebc01af0971d7bd34895c7f604a5bfd06b2bbcf1facb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
