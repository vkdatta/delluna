export const name="lucid_2-forward";
export const id="dl_a3dceee7ac0f4582892e";
export const url=new URL("../icons/lucid_2-forward.svg?v=aaf2f57fb5b041222028072f16a2a5fc27ed6a4c7933c76996de41beaa1e8b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
