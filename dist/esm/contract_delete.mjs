export const name="contract_delete";
export const id="dl_df415d2659f97d6515a0";
export const url=new URL("../icons/contract_delete.svg?v=4a9c783fb67f34ad163a21e40f3be33c7c338c6d33efc818521775a2ba63c187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
