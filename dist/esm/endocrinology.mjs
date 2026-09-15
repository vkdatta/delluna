export const name="endocrinology";
export const id="dl_acded516a0d24309b5e5";
export const url=new URL("../icons/E/endocrinology.svg?v=973e7804e5190e9f869cd0de4555a7258cb6313f9bdc528c9153dc289992163b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
