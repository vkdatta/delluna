export const name="axe-duotone";
export const id="dl_38df57a124724cdcab6b";
export const url=new URL("../icons/axe-duotone.svg?v=5228dbfcb20f3b1b7a97ca513f642d038cb3e5b00848fe2573e221406b0df609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
