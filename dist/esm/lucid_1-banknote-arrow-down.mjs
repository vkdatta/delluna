export const name="lucid_1-banknote-arrow-down";
export const id="dl_fa7f233783934a48863e";
export const url=new URL("../icons/lucid_1-banknote-arrow-down.svg?v=fbca50bcd9b4d62c363574da7b80504552b92c03c39e88ec34cb1aba33f1bd35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
