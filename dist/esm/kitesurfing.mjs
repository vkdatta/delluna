export const name="kitesurfing";
export const id="dl_7ce05663e3094e63af7a";
export const url=new URL("../icons/K/kitesurfing.svg?v=22318164dd20074226825d3ee3ec0681b6684c34ca7193404fd753b9f6c0fdec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
