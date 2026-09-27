export const name="no_accounts-fill";
export const id="dl_55f114a9cf1ab17c77ed";
export const url=new URL("../icons/no_accounts-fill.svg?v=25ed5a524a1b8ded0911e5ad8753cab625f65b01129b51b471e18ec4b8a98f2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
