export const name="text_up-fill";
export const id="dl_9cc496ecba104b3851ef";
export const url=new URL("../icons/text_up-fill.svg?v=4b91a63ac69d8983f145808c2fdcb7002605ff1b8c9e6b1974fe7ab677076495",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
