export const name="sleep_score-fill";
export const id="dl_9872d00fd1e8f116ba48";
export const url=new URL("../icons/sleep_score-fill.svg?v=e36a3f2268bb11ec96ac0cca781b7a53102318d96e2feb92b4879597a075d271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
