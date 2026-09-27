export const name="person_add_disabled";
export const id="dl_931324460e71d5cc7861";
export const url=new URL("../icons/person_add_disabled.svg?v=a38b3d7c1bf5a38a87d0c0c7b8e50477412af6620bfbf41682042f415ccfa1f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
