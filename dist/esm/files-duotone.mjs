export const name="files-duotone";
export const id="dl_10a091b7b91d4d95ac2a";
export const url=new URL("../icons/files-duotone.svg?v=65b0d4cb1cfe233866c6d0560612ff67680192ca9144791a6c3ab26a4084f37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
