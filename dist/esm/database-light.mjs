export const name="database-light";
export const id="dl_987b076f53ea48bc9096";
export const url=new URL("../icons/database-light.svg?v=8d831ba4323f9a02ed1befd7b195f25e1fd5650903369e0bd9ef8481ea205aaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
