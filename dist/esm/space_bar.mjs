export const name="space_bar";
export const id="dl_851e5dcb78de4c1d8c28";
export const url=new URL("../icons/space_bar.svg?v=94d7089c57553f7610f3c6f4cca9b8ecb5eb3186e8c7ee662672d82a29642787",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
