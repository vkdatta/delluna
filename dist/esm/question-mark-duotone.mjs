export const name="question-mark-duotone";
export const id="dl_1daf8cb1c68a4ede8cc4";
export const url=new URL("../icons/question-mark-duotone.svg?v=d7cb8e943dd33413153c2aae4cce6a3fabccef5283c8ef149b4b5a103b329c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
