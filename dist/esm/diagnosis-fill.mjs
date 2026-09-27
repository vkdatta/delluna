export const name="diagnosis-fill";
export const id="dl_62384f5000f3a8547f73";
export const url=new URL("../icons/diagnosis-fill.svg?v=e9085dd7834f78e6aee5676e0b6aeee4ccf7fce3f28dc6c1c7ede0d94dc4a767",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
