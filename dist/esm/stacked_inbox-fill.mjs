export const name="stacked_inbox-fill";
export const id="dl_103ab7b5a2744e268154";
export const url=new URL("../icons/stacked_inbox-fill.svg?v=72a3182ef9121cdc24f5e0784e69a27cb81c209e8e1eb579365e7714aaca27a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
