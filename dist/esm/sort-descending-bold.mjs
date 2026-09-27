export const name="sort-descending-bold";
export const id="dl_6fd017cb219bee9539b2";
export const url=new URL("../icons/sort-descending-bold.svg?v=340bde50a61f0f17b5b3a6bada221541e49f64008d639fcb7c42e38b61ac0bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
