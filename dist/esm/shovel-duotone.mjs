export const name="shovel-duotone";
export const id="dl_9f1ae1aad7c467a23214";
export const url=new URL("../icons/shovel-duotone.svg?v=f5a9fd5ce65abd63ebb55c53eceeab1000b531e6b29b54e8b7f87e7a903a7b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
