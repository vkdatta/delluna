export const name="superscript";
export const id="dl_601c7e5dd4ce4b6f90bb";
export const url=new URL("../icons/superscript.svg?v=695c8d747cdbb7c7694effd94c41f2342b1678a7e3459455ac7ba66c6f74940d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
