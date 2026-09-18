export const name="light";
export const id="dl_bb5319b02b5845a2a501";
export const url=new URL("../icons/L/light.svg?v=449a65322ed46238f2002571f4fa13d22063ad94c36db2b338af599625ea199b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
