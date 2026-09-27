export const name="gemini";
export const id="dl_e00d247b50676e1e188b";
export const url=new URL("../icons/gemini.svg?v=4619715b73d107379d28e3129b3f57cbb4e5b9d3a3c05e49ab46b15fd51c3f97",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
