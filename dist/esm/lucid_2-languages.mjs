export const name="lucid_2-languages";
export const id="dl_6a9d7bba87ec402bb75b";
export const url=new URL("../icons/lucid_2-languages.svg?v=d4975d61736a3509cb1df92400013dc93edf43ec36a54eb9aa056b6fbf6014d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
