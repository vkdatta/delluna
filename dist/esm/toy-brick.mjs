export const name="toy-brick";
export const id="dl_0e93b81aa2584d6a9e00";
export const url=new URL("../icons/toy-brick.svg?v=8cbcd55b9d0902834d64e4a9c8791a9bb307652ceb36b637e2294e6662e5e823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
