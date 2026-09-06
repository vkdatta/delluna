export const name="dots-six-duotone";
export const id="dl_ace7819513da4a28913c";
export const url=new URL("../icons/dots-six-duotone.svg?v=6665e5c787c5a5b20249f191422be11abc6bd4dab753a05c18e67f38179c8f9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
