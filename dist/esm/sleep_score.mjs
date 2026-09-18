export const name="sleep_score";
export const id="dl_1c158f0dc5b34a7d91ef";
export const url=new URL("../icons/sleep_score.svg?v=8db74f21c0b434171085a2175bd6b632d2a2bbc9b09dc23c8ad3f25ece4cd5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
