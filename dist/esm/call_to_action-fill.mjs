export const name="call_to_action-fill";
export const id="dl_14f0f9d314e16fd21f34";
export const url=new URL("../icons/call_to_action-fill.svg?v=89fd967c4aad3e085b0d4b02331528d35bd4da9cb33ee1f5d2a63b70c2ca2e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
