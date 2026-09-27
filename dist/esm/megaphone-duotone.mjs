export const name="megaphone-duotone";
export const id="dl_f9bf188c1bb445aea458";
export const url=new URL("../icons/megaphone-duotone.svg?v=be9ee5ab8e578d1995bd2bfe88c667ac28774026b336aaf16f5318268ea7b5ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
