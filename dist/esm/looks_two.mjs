export const name="looks_two";
export const id="dl_6ad6b7dcbd0f400fb0dd";
export const url=new URL("../icons/L/looks_two.svg?v=12e1e26e25a7a55443fcd274417212837924ae184987ec6c1c9dca3db4cad56f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
