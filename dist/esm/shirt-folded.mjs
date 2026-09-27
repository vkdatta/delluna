export const name="shirt-folded";
export const id="dl_eb95937e87d242b7bae3";
export const url=new URL("../icons/shirt-folded.svg?v=118c764eeb8af7313db953ef5ba9dc5c78f536a5ae2bbc9cd1f532e8c6ade4e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
