export const name="lucid_3-octagon-minus";
export const id="dl_621b9d769a2e4b338647";
export const url=new URL("../icons/lucid_3-octagon-minus.svg?v=916f4c41eb8f4ed1981bb9071423a0bd088011f4b2c8f3fb86b2bbd2d302312e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
