export const name="garage_money";
export const id="dl_66806174b4ca60370a1a";
export const url=new URL("../icons/garage_money.svg?v=98e8b02b7778c1a7ec6bb194d4c8f81b246ad978af54065548c8aff6b9f569fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
