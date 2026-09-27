export const name="lucid_3-square-arrow-out-up-right";
export const id="dl_8d8908287ebc457a8eec";
export const url=new URL("../icons/lucid_3-square-arrow-out-up-right.svg?v=76cc27d4237fde6944c6082178448e73d9b4f73aa4b2af46d8536676d58c23e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
