export const name="question-duotone";
export const id="dl_4aa19736c98042e3bf0f";
export const url=new URL("../icons/question-duotone.svg?v=69cc317d5898bdb4a79411828adeaed80d06c26db27868773a70aaae936eefb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
