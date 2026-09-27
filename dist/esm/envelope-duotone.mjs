export const name="envelope-duotone";
export const id="dl_46ed8b88afac4d0c9e2e";
export const url=new URL("../icons/envelope-duotone.svg?v=9a534abb49ebafb84500fd40bb592904a292b7a846ecb10b186446814a904ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
