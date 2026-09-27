export const name="lucid_3-message-square-dot";
export const id="dl_fed75f914e534a3b8521";
export const url=new URL("../icons/lucid_3-message-square-dot.svg?v=789c48b664f98c0d3ff58fb48855c3e718fdf5054804c2ebff49f8f10ac0a42e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
