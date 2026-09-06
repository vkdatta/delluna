export const name="question-duotone";
export const id="dl_4aa19736c98042e3bf0f";
export const url=new URL("../icons/question-duotone.svg?v=af995bac28b5f0007c9ff20cf23351dba0a8c07cea55868cd8b65056bc103515",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
