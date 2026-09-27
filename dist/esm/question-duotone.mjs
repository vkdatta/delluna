export const name="question-duotone";
export const id="dl_4aa19736c98042e3bf0f";
export const url=new URL("../icons/question-duotone.svg?v=82feabbbdde506046dfa9e84afa312ce3a0d0fcf756b50f0ed194794c0fe31e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
