export const name="microsoft-word-logo-duotone";
export const id="dl_7af457df61544a22b98b";
export const url=new URL("../icons/microsoft-word-logo-duotone.svg?v=647ca0fc44c12e9ff4f170534bac6cb5f74705b8d7ed3e349444aaaccfeea25c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
