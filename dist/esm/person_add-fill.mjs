export const name="person_add-fill";
export const id="dl_a9a57df04324f65b4d56";
export const url=new URL("../icons/person_add-fill.svg?v=0548b5bd7b683b54e9c58f194e9a6a60d93e8b8040f20421335370f823ebc46c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
