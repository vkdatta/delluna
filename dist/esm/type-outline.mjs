export const name="type-outline";
export const id="dl_6205dd096ea84f9b88cd";
export const url=new URL("../icons/type-outline.svg?v=346d38f23bd175983f0b305b9cd01512e89fd63cdef456a47d0301947debcb0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
