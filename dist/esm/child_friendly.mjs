export const name="child_friendly";
export const id="dl_3c3a622cc9b4438586fc";
export const url=new URL("../icons/C/child_friendly.svg?v=dd3c0ee8b28bf690f6624ded8d5d626f264ac4bd24865effcd3f662018c8f809",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
