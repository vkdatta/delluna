export const name="plus-minus-thin";
export const id="dl_405ea47e876d461cb7b0";
export const url=new URL("../icons/plus-minus-thin.svg?v=40840ce98aba2a3b8bc50cc1c0e135c3ab95d61b211ebda88125ca67b834c0f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
