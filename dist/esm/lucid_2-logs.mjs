export const name="lucid_2-logs";
export const id="dl_3f4efef5c7464ec59382";
export const url=new URL("../icons/lucid_2-logs.svg?v=5fa42a165a1f0498f76749963c3b726911aedf8d6a330addeb08c9e711463ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
