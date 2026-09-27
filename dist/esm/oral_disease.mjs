export const name="oral_disease";
export const id="dl_83711c6c406916829c5f";
export const url=new URL("../icons/oral_disease.svg?v=9eb8ea5402512885954b225aa1c93e94582a84f3bf9eac25a1fe3fb846a2bafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
