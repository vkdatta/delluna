export const name="tag";
export const id="dl_22c5d43ef23249698bd2";
export const url=new URL("../icons/tag.svg?v=1664913929c5ad699a6935a6e3b1a536c6c2d7a9370f2f38c66a8892e46579c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
