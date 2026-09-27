export const name="lucid_1-copy-check";
export const id="dl_1a50b0fb8e184ada9f15";
export const url=new URL("../icons/lucid_1-copy-check.svg?v=2b3adde87720c8ea4f20002515aeca8a9fa27ce7d41e868a7867a3f9c20e04d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
