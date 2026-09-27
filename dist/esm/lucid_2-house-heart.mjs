export const name="lucid_2-house-heart";
export const id="dl_a2a2a09a08704402a314";
export const url=new URL("../icons/lucid_2-house-heart.svg?v=10d7967534b911ef01b9b647cb7aca66b226e04b54aa2483a98772419fa753cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
