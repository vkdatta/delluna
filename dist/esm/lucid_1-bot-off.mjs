export const name="lucid_1-bot-off";
export const id="dl_e5b22799c90d40dc8ffe";
export const url=new URL("../icons/lucid_1-bot-off.svg?v=8e5202de7844bb11bacab7059374bde23707da29d4ff91760c1bb0c337580e0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
