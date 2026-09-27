export const name="currency-kzt-fill";
export const id="dl_a874104adcd44c4c8d1c";
export const url=new URL("../icons/currency-kzt-fill.svg?v=76611f77ad9ffa365436a87398f121f93014a098ef49a2ee864ac0c7b1c143f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
