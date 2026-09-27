export const name="lucid_1-arrow-up-from-line";
export const id="dl_82dc0d0d07a84a989ef8";
export const url=new URL("../icons/lucid_1-arrow-up-from-line.svg?v=e2aa3bcf8898b758d478dd77e6009c1fcf3f765f850664fb61e49fa5d9437785",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
