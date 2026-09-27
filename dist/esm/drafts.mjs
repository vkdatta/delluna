export const name="drafts";
export const id="dl_9f862da903be4247b8a5";
export const url=new URL("../icons/drafts.svg?v=0e8bc3b6caa419ddacb2e1a2ffef16ffe9f03b57a03bd4f380acb1d27203aa13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
