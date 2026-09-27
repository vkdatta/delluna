export const name="lucid_3-milk";
export const id="dl_5c187142ff9a4e37962f";
export const url=new URL("../icons/lucid_3-milk.svg?v=2a9b584351b35fc034c011aba4eb9e96a9b44d765b9b5bb2b6334a778f1bc4af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
