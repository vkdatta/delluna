export const name="mark_email_read";
export const id="dl_40afcfd2369af834ff9a";
export const url=new URL("../icons/mark_email_read.svg?v=d1734b1896f348c5ab19eee2b6a1c73d5382621a4e2687ca9eb4246cc1263163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
