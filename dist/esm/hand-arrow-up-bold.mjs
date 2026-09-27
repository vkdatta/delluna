export const name="hand-arrow-up-bold";
export const id="dl_10a72ac7364441348800";
export const url=new URL("../icons/hand-arrow-up-bold.svg?v=6f7a136331f84aff6d98afa81eea5c0c7c3f21cbfdde37d0d9942c54c8c6999e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
