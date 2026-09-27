export const name="description";
export const id="dl_36cf4d285e23db3bb530";
export const url=new URL("../icons/description.svg?v=0f0c6181dbd970b3ef903f60d8c52b974432583760edfdc6d0d7b60b87c574c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
