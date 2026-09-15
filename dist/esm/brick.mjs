export const name="brick";
export const id="dl_938129870075462989d1";
export const url=new URL("../icons/B/brick.svg?v=5551f1502b757a5bb237952917584e0f6c4289991996b382dc757be719a84bfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
