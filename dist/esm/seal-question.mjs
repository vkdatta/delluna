export const name="seal-question";
export const id="dl_6d9decda899672c0460b";
export const url=new URL("../icons/seal-question.svg?v=92029ed1ead3259621e751982cd6c54857b09dc64c927f224cc84076b63b6e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
