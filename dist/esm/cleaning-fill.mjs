export const name="cleaning-fill";
export const id="dl_a54902fa5ddc713edf5e";
export const url=new URL("../icons/cleaning-fill.svg?v=5664f48042b3e9fdddf19a1b17ff7174e1e4e2749c2bc07b3e9fbb4276633314",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
