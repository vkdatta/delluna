export const name="arrow-up-duotone";
export const id="dl_91c1a5741f254cf8af64";
export const url=new URL("../icons/arrow-up-duotone.svg?v=65f6ecc188c81db4bef1de77dc479429f8706796e631d6c8914c69b80b7e4668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
