export const name="microsoft-teams-logo-light";
export const id="dl_bdf127373a824d97b9a6";
export const url=new URL("../icons/microsoft-teams-logo-light.svg?v=97b8f5b73f37fe354ea452e0e46f3c88789a647f7a7fc46a6f67348baa3c7e23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
