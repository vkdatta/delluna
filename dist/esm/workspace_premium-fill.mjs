export const name="workspace_premium-fill";
export const id="dl_aded0a11b7fc446da841";
export const url=new URL("../icons/workspace_premium-fill.svg?v=0f0e351b42a612a6492406a019a8c243900b03c1fc7f7d23dbea76fcf883bbcb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
