export const name="drop-simple-thin";
export const id="dl_1808ca0c88754f3c8d21";
export const url=new URL("../icons/drop-simple-thin.svg?v=07bbfff2df3c9ebdf7f9205096e3c33a6b8ee047007a48f30d093f56de94469d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
