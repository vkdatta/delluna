export const name="tire-light";
export const id="dl_2025e077ae8c445d8f36";
export const url=new URL("../icons/T/tire-light.svg?v=8269cef64d22fdb9df9d94d8409a43c4dce8c3fb59c19832a74bef15a138cd3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
