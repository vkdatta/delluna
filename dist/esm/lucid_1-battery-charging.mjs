export const name="lucid_1-battery-charging";
export const id="dl_a077ea59e095451fa5cd";
export const url=new URL("../icons/lucid_1-battery-charging.svg?v=b268cb474b735c892576c4ebac410895fb60ec715cbc454b74333686e7064d2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
