export const name="pentagon-thin";
export const id="dl_a440e6f074d54a43a5f8";
export const url=new URL("../icons/pentagon-thin.svg?v=f9e8a520e70cae3fcc159f3da51fb7ad64544d9ceb377f07c8caa53681668b8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
