export const name="lucid_1-battery-charging";
export const id="dl_a077ea59e095451fa5cd";
export const url=new URL("../icons/lucid_1-battery-charging.svg?v=1233469202f33ddf8391d909ec078ff8f5024ac9f793bf4e8052efa6d78405cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
