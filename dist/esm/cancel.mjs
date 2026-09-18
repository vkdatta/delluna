export const name="cancel";
export const id="dl_da40e5fbd1d749e694d9";
export const url=new URL("../icons/cancel.svg?v=4f2e080cf23d45ce22086159263662cea846b47eb30fd3475068ba2befbb9edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
