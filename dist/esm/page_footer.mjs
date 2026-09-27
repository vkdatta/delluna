export const name="page_footer";
export const id="dl_9aa596263cddee4de375";
export const url=new URL("../icons/page_footer.svg?v=b14b44f0c22dd7b103d93f520e17fe6eade37f0beed5a260ac076d34b6ae350d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
