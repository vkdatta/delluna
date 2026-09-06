export const name="acorn-duotone";
export const id="dl_8b89bd11d7834123b527";
export const url=new URL("../icons/acorn-duotone.svg?v=66b62bddcd4c9f7b7b2bbb09c29de4643d2bfe1c7c4aad3b8d1e7ac64716bd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
