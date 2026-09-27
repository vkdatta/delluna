export const name="empty-thin";
export const id="dl_020f1ab698d8462aac79";
export const url=new URL("../icons/empty-thin.svg?v=c0972a160bcbb3deb0d7b5266f161f40c69b064d9b785925df10d2b419409df3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
