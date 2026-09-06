export const name="cursor-click";
export const id="dl_c43510ac03dc4461a54d";
export const url=new URL("../icons/cursor-click.svg?v=ab146e15194ce11c438aac2f6e45d7a0082bbab5f2cc8d9816140eab848246f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
