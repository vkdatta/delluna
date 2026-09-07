export const name="stack-minus-thin";
export const id="dl_71865176545347c09e53";
export const url=new URL("../icons/S/stack-minus-thin.svg?v=3274665baa466dca4925b42f0c34549c3c56a937cde769ab1002448adcfba94b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
