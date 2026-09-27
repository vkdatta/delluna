export const name="lucid_1-bell-dot";
export const id="dl_2e491811525c416d89ca";
export const url=new URL("../icons/lucid_1-bell-dot.svg?v=bc97ad121705e542b5bf4801d4480755daaa38cab68b4fbd2aaaeb663568aa56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
