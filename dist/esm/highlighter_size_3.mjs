export const name="highlighter_size_3";
export const id="dl_1a71f2db000de7c6d8f1";
export const url=new URL("../icons/highlighter_size_3.svg?v=15c3ca83a1c9fe1a212f5a372b2e90b1350576ef5ae9832138e045b9e7e2af7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
