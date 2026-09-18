export const name="table_sign";
export const id="dl_1712a634640b4a809c36";
export const url=new URL("../icons/table_sign.svg?v=ab28d5018e3c5338dd92fd72a211cd64b7885088614e7e9c2652824b663eea40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
