export const name="file-text-fill";
export const id="dl_37ae2e18caae41cd95de";
export const url=new URL("../icons/file-text-fill.svg?v=e7a8ba720724a12ca6a82a2881c9428862dbca9cf803491d729d751b20be2bb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
