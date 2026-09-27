export const name="lucid_3-panel-bottom-close";
export const id="dl_9d3f9cbac47b4e749b67";
export const url=new URL("../icons/lucid_3-panel-bottom-close.svg?v=28afd36fb47417eec24941472e54fc9a9453933fd34de40befc9162529cfc70b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
