export const name="code_xml";
export const id="dl_772a49fb88e2b3e307c9";
export const url=new URL("../icons/code_xml.svg?v=f0ddf2acd63196b910abec9befb44308b6e7eb00e2a4ecb34eb11ef373368c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
