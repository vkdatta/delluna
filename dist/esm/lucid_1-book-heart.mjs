export const name="lucid_1-book-heart";
export const id="dl_094b8d1b76ff4218881c";
export const url=new URL("../icons/lucid_1-book-heart.svg?v=a577a6cdcda5a4ec5aa91877c680e14e2a14615400b8a8c2bd9b15756a38f312",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
