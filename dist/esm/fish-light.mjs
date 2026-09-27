export const name="fish-light";
export const id="dl_860e3cddd1c949859888";
export const url=new URL("../icons/fish-light.svg?v=48fb9c7f710eeae38c9d6d46a06e4918fe00c81ccd7483fcceb43d6e7ac5793f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
