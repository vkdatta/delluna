export const name="lucid_1-badge-question-mark";
export const id="dl_6569cf4753864b618931";
export const url=new URL("../icons/lucid_1-badge-question-mark.svg?v=3c0352b18988e9f22b882be342293435c556575aeb27c980c0c6f0ed90268677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
