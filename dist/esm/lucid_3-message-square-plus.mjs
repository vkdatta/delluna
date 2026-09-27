export const name="lucid_3-message-square-plus";
export const id="dl_7553bae8b38140908491";
export const url=new URL("../icons/lucid_3-message-square-plus.svg?v=4d86036ceb825c202b2e68579d0f104c8fb1426bd02eaa616c1c68ad27b98b8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
