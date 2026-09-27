export const name="tree-palm-thin";
export const id="dl_c6728242524dd5dd8f3b";
export const url=new URL("../icons/tree-palm-thin.svg?v=2157c50ae1b43103001a05b9c9201984089402981e770e518fc7cb24afa345c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
