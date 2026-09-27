export const name="lucid_3-message-circle-dashed-check";
export const id="dl_c392182306ad4c84863b";
export const url=new URL("../icons/lucid_3-message-circle-dashed-check.svg?v=5f62cf391b560d6255e174da90db4ef78389b0e73910384a3461f77105896aa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
