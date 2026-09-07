export const name="timer-duotone";
export const id="dl_aa552278182644338ad6";
export const url=new URL("../icons/T/timer-duotone.svg?v=fda04f76dea917e8196fabe509c0fe283ab0d4edca4001a0f965901905e4f0c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
