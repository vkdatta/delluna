export const name="facebook-logo";
export const id="dl_94a4a3ca5cad4cc1a5c1";
export const url=new URL("../icons/facebook-logo.svg?v=8a2924f6e0efe137d808a288511a153788a070674e45dda22b6a67d84a218d4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
