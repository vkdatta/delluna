export const name="files-light";
export const id="dl_94167af630644f1aa89c";
export const url=new URL("../icons/files-light.svg?v=3da349e1c67718766fc466e1182a180403e4f36a8d1e5fc9668351853afbc7e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
