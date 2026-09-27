export const name="lamp-bold";
export const id="dl_86d2650ebca849af825b";
export const url=new URL("../icons/lamp-bold.svg?v=689f7b8c9871b4d60c756ffb9121777024b7f5223779165446a73d9c606722cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
