export const name="lucid_1-arrow-down-to-dot";
export const id="dl_a33f30a36a6943a186d1";
export const url=new URL("../icons/lucid_1-arrow-down-to-dot.svg?v=a066678e87f8e1f39c82fa36480603271d745c4ba4dfa6c13772cbd4a809887d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
