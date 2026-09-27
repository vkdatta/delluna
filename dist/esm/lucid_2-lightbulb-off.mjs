export const name="lucid_2-lightbulb-off";
export const id="dl_9d1f369aba5540a096e6";
export const url=new URL("../icons/lucid_2-lightbulb-off.svg?v=fbe1632372728a0b97b119e6f94103a0fe854d89a9574ff4a63c659e32e50ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
