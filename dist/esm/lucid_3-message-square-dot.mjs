export const name="lucid_3-message-square-dot";
export const id="dl_fed75f914e534a3b8521";
export const url=new URL("../icons/lucid_3-message-square-dot.svg?v=447f9cf3d9a81f28a58a6a6cdab90f2f54c60784f2e8b384303d2445c0fe0a3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
