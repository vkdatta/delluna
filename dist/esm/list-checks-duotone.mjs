export const name="list-checks-duotone";
export const id="dl_b30ed185c8e74bc4b40d";
export const url=new URL("../icons/list-checks-duotone.svg?v=897255825c6b811fedaab24dc623395f4b6efb2e15c2e1c4d9ad186c95ed1861",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
