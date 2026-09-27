export const name="flash_on";
export const id="dl_2552775339fd9e2e8e10";
export const url=new URL("../icons/flash_on.svg?v=b7585b4a4f686d732d557299b8f6ea0d8600451bb6c6d8ee546f028a1dfbbafb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
