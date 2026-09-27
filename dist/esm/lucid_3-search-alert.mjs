export const name="lucid_3-search-alert";
export const id="dl_d64602537a694524b35f";
export const url=new URL("../icons/lucid_3-search-alert.svg?v=51fb385c7996845998e0883cbc0383b3e40d1441c9b83d05c5a09a2210d79895",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
