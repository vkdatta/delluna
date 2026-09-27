export const name="flyover-fill";
export const id="dl_7c1c71fd070cba7a08a5";
export const url=new URL("../icons/flyover-fill.svg?v=3e638da970fb2f1396298753b7746c623b867530b84294d228e09af4533c1309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
