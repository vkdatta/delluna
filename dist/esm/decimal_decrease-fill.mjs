export const name="decimal_decrease-fill";
export const id="dl_fa7bc84c1da3c27e796a";
export const url=new URL("../icons/decimal_decrease-fill.svg?v=a96b24ee0510f610c4e0c7f7f680759fc9f01b4b9cefb86a31e33c38d2713b67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
