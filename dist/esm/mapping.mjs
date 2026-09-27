export const name="mapping";
export const id="dl_d604c30bd0b54572ba74";
export const url=new URL("../icons/mapping.svg?v=5700a262d928e587840f132d7dc09ca9100777855c039168868f620750167519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
